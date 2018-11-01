import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';

export default {
    input: "./src/index.js",
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: 'isContinuous',
        },
        {
            file: pkg.module,
            format: 'es',
        }
    ],
    plugins: [
        json(),
        nodeResolve(),
        minify({
            removeConsole: true,
            removeDebugger: true,
        })
    ]
}