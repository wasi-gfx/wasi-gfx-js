// Only used for examples

import typescript from '@rollup/plugin-typescript';

export default function(args) {
    return {
        input: `./examples/${args.configExample}.ts`,
        external: ['wasi:webgpu/webgpu'],
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
