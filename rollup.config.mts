import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { InputPluginOption, RollupOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json' assert { type: 'json' };

const options: RollupOptions[] = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: "./dist/umd/index.js",
                format: 'umd',
                sourcemap: true,
                name: "stemcstudioMechanicsJsxGraph",
            },
            {
                file: "./dist/umd/index.min.js",
                format: 'umd',
                sourcemap: true,
                name: "stemcstudioMechanicsJsxGraph",
                plugins: [terser()]
            },
            {
                file: "./dist/cjs/index.js",
                format: 'cjs',
                sourcemap: true,
                name: 'stemcstudioMechanicsJsxGraph'
            },
            {
                file: "./dist/esm/index.js",
                format: 'esm',
                sourcemap: true
            },
            {
                file: "./dist/esm/index.min.js",
                format: 'esm',
                sourcemap: true,
                plugins: [terser()]
            },
            {
                file: "./dist/system/index.js",
                format: 'system',
                sourcemap: true
            },
            {
                file: "./dist/system/index.min.js",
                format: 'system',
                sourcemap: true,
                plugins: [terser()]
            }
        ],
        plugins: [
            external() as InputPluginOption,
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            // terser()
        ]
    },
    {
        input: 'dist/esm/types/src/index.d.ts',
        output: [{ file: packageJson.types, format: "esm" }],
        plugins: [dts()],
    }
];

export default options;