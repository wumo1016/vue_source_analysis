/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options) // 将template生成ast语法树 parseHTML
  if (options.optimize !== false) {
    optimize(ast, options) // 对静态语法做静态标记 
  }
  const code = generate(ast, options) // 生成字符串代码 _c _v
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
