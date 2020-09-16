/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// 指令模块应该最后应用，在所有内置模块被应用之后

// platformModules 是用于给原生dom设置一些属性
// baseModules 则是处理标签上的ref和指令
const modules = platformModules.concat(baseModules)

// nodeOps 是一些原生操作dom的方法

export const patch: Function = createPatchFunction({ nodeOps, modules })
