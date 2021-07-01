import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss';
import copy from "rollup-plugin-copy-assets";
import pkg from './package.json'
import image from '@rollup/plugin-image';
import babel from '@rollup/plugin-babel';
import { visualizer } from 'rollup-plugin-visualizer';

export default {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      copy({
        assets: ["src/stories/assets"]
      }),
      typescript({ objectHashIgnoreUnknownHack: true }),
      babel({ babelHelpers: 'bundled' }),
      image(),
      visualizer()
    ],
    external: ['react', 'react-dom']
}