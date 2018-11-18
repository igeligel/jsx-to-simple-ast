import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default [
  {
    input: 'src/parser.js',
    output: [
      {
        name: 'jsxToSimpleAst',
        file: pkg.browser,
        format: 'umd',
        exports: 'named',
        globals: { '@babel/parser': 'babelParser' },
      },
      { file: pkg.main, format: 'cjs', exports: 'named' },
      { file: pkg.module, format: 'es', exports: 'named' },
    ],
    plugins: [
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules',
        },
      }),
    ],
    external: ['@babel/parser'],
  },
];
