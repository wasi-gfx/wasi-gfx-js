import typescript from '@rollup/plugin-typescript';

export default function(args) {
    return {
        input: `./examples/${args.configExample}.ts`,
        external: [
            'wasi:webgpu/webgpu@0.0.1',
            'wasi:surface/surface@0.0.1',
            'wasi:graphics-context/graphics-context@0.0.1',
            'wasi:frame-buffer/frame-buffer@0.0.1',
        ],
        output: {
            file: `temp/${args.configExample}.js`,
            format: 'esm'
        },
        plugins: [
            typescript({
                tsconfig: './examples/tsconfig.json',
            }),
        ]
    };
};
