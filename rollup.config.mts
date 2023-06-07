import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
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
                file: packageJson.browser,
                format: 'umd',
                sourcemap: true,
                name: "stemcstudioMechanicsJsxGraph",
            },
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                name: 'stemcstudioMechanicsJsxGraph'
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            },
            {
                file: packageJson.system,
                format: 'system',
                sourcemap: true
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