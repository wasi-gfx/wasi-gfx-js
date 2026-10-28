import typescript from '@rollup/plugin-typescript';

export default function() {
    return {
        input: `./tests/tests.ts`,
        external: [
            'wasi:webgpu/webgpu@0.0.1',
            'wasi:surface/surface@0.0.1',
            'wasi:graphics-context/graphics-context@0.0.1',
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
