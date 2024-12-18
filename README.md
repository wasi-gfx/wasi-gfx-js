# wasi-gfx-js implements the official WebGPU JavaScript API on top of WASI

## Compile the TypeScript
```shell
npm run build
```

## Examples

### Available examples:
- hello-compute
- hello-triangle

### Compile an example:
```shell
npm run example --example=[example]
```

### Run an example:
Use [github.com/wasi-gfx/graphtime](https://github.com/wasi-gfx/graphtime) to run ./out/[example].wasm


## Generate types from wit
```shell
jco types wit --out-dir=types
```
