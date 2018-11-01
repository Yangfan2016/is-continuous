import pkg from './package.json';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript2';

export default [
    {
        input: "./src/index.ts",
        output: {
            file: pkg.main,
            format: 'umd',
            name: 'isContinuous',
        },
        plugins: [
            json(),
            nodeResolve(),
            typescript(),
            uglify()
        ]
    },
    {
        input: "./src/index.ts",
        output: {
            file: pkg.module,
            format: 'es',
        },
        plugins: [
            json(),
            nodeResolve(),
            typescript({
                tsconfigDefaults: {
                    "compilerOptions": {
                        "target": "es2015",
                        "module": "es2015",
                    }
                }
            })
        ]
    }
]