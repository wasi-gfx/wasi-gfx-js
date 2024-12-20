import typescript from '@rollup/plugin-typescript';

export default function() {
    return {
        input: `./tests/tests.ts`,
        external: [
            'wasi:webgpu/webgpu',
            'wasi:webgpu/surface',
            'wasi:webgpu/graphics-context',
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
