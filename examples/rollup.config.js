import typescript from '@rollup/plugin-typescript';

export default function(args) {
    return {
        input: `./examples/${args.configExample}.ts`,
        external: [
            'wasi:webgpu/webgpu',
            'wasi:webgpu/surface',
            'wasi:webgpu/graphics-context',
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
