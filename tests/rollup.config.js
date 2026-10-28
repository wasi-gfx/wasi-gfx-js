import typescript from '@rollup/plugin-typescript';

export default function() {
    return {
        input: `./tests/tests.ts`,
        external: [
            "wasi:webgpu/webgpu@0.3.0-rc.2",
            "wasi-gfx:frame-buffer/frame-buffer@0.2.0",
            "wasi-gfx:surface/surface@0.2.0",
            "wasi-gfx:surface/surface-webgpu@0.2.0",
            "wasi-gfx:surface/surface-frame-buffer@0.2.0",
        ],
        output: {
            file: `temp/tests.js`,
            format: 'esm'
        },
        plugins: [
            typescript({
                tsconfig: './tests/tsconfig.json',
            }),
        ]
    };
};
