import { createCanvas, getGpu } from "../src/index";

export const run = {
    async run() {
        await main();
    },
};

async function main() {
    // example taken from https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html
    const gpu = getGpu();
    const adapter = await gpu.requestAdapter();
    const device = await adapter?.requestDevice();

    if (!device) {
        throw new Error('No device found');
    }

    // Get a WebGPU context from the canvas and configure it
    const canvas = createCanvas();
    const context = canvas.getContext('webgpu');
    const presentationFormat = "bgra8unorm-srgb"; // gpu.getPreferredCanvasFormat();
    context.configure({
        device,
        format: presentationFormat,
    });

    const module = device.createShaderModule({
        label: 'our hardcoded red triangle shaders',
        code: `
            @vertex fn vs(@builtin(vertex_index) in_vertex_index: u32) -> @builtin(position) vec4<f32> {
                let x = f32(i32(in_vertex_index) - 1);
                let y = f32(i32(in_vertex_index & 1u) * 2 - 1);
                return vec4<f32>(x, y, 0.0, 1.0);
            }

            @fragment fn fs() -> @location(0) vec4<f32> {
                return vec4<f32>(1.0, 0.0, 0.0, 1.0);
            }
        `,
    });

    const pipeline = device.createRenderPipeline({
        label: 'our hardcoded red triangle pipeline',
        layout: 'auto',
        vertex: {
            module,
        },
        fragment: {
            module,
            targets: [{ format: presentationFormat }],
        },
    });

    let background = .5;
    let reversing = false;

    let render = () => {
        // make a command encoder to start encoding commands
        const encoder = device.createCommandEncoder({ label: 'our encoder' });

        if(reversing) {
            background -= .01;
            if (background <= 0) {
                reversing = false;
            }
        } else {
            background += .01;
            if (background >= 1) {
                reversing = true;
            }
        }

        // make a render pass encoder to encode render specific commands
        const pass = encoder.beginRenderPass({
            label: 'our basic canvas renderPass',
            colorAttachments: [
                {
                    view: context.getCurrentTexture().createView(),
                    clearValue: [background, background, background, .5],
                    loadOp: 'clear',
                    storeOp: 'store',
                },
            ],
        });
        pass.setPipeline(pipeline);
        pass.draw(3);  // call our vertex shader 3 times.
        pass.end();

        const commandBuffer = encoder.finish();
        device.queue.submit([commandBuffer]);
        canvas.requestAnimationFrame(render);
    }
    canvas.requestAnimationFrame(render);
}
