import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';

export default {
  input: 'src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      "presets": ["@babel/preset-typescript"],
      "plugins": [
        ["@babel/plugin-proposal-decorators", { "version": "2023-11" }],
        [
          "@babel/plugin-transform-react-jsx",
          {
            "runtime": "automatic",
            "importSource": "coco-mvc"
          }
        ]
      ]
    }),
    postcss({
      plugins: [
        tailwindcss(),
      ],
      extract: true,
    })
  ],
};