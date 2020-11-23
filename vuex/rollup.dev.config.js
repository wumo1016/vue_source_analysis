import buble from '@rollup/plugin-buble'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

const banner = `/*!
 * vuex v${pkg.version}
 * (c) ${new Date().getFullYear()} Evan You
 * @license MIT
 */`

module.exports = {
  input: 'src/index.js',
  plugins: [
    buble(),
    resolve(),
    commonjs(),
    replace({
      __VERSION__: pkg.version,
      __DEV__: true
    })
  ],
  output: {
    banner,
    file: '../src/test/node_modules/vuex/dist/vuex.esm.js',
    format: 'es',
    name: 'Vuex'
  },
  onwarn: (msg, warn) => {
    if (!/Circular/.test(msg)) {
      warn(msg)
    }
  }
}
