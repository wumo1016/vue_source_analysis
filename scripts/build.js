// wyb
const startTime = Date.now()

const fs = require('fs') // 文件系统 
const path = require('path') // 路径
const zlib = require('zlib') // 压缩

const rollup = require('rollup')
const terser = require('terser') // 压缩

/**
 * fs.existsSync(path) 检测路径是否存在，返回布尔值
 * fs.mkdirSync(path, options) 同步创建目录，返回undefined
 */

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist')
}
// 获取vue所有版本的构建配置
let builds = require('./config').getAllBuilds()

/**
 * process.argv 返回一个数组，其中包含node进程被启动时传入的命令行参数
 */

if (process.argv[2]) {
  const filters = process.argv[2].split(',')
  builds = builds.filter(b => {
    return filters.some(f => b.output.file.indexOf(f) > -1 || b._name.indexOf(f) > -1)
  })
} else {
  // 默认构建，并且过滤掉 weex 相关构建
  builds = builds.filter(b => {
    return b.output.file.indexOf('weex') === -1
  })
}

// 执行构建
build(builds)

function build (builds) {
  let built = 0
  const total = builds.length
  const next = () => {
    buildEntry(builds[built]).then(() => {
      built++
      if (built < total) {
        next()
      }
    }).catch(logError)
  }
  next()
}

function buildEntry (config) {
  const output = config.output
  const { file, banner } = output
  const isProd = /(min|prod)\.js$/.test(file)
  return rollup.rollup(config)
    .then(bundle => bundle.generate(output))
    .then(({ output: [{ code }] }) => {
      if (isProd) {
        const minified = (banner ? banner + '\n' : '') + terser.minify(code, {
          toplevel: true,
          output: {
            ascii_only: true
          },
          compress: {
            pure_funcs: ['makeMap']
          }
        }).code
        return write(file, minified, true)
      } else {
        return write(file, code)
      }
    })
}

function write (dest, code, zip) {
  return new Promise((resolve, reject) => {
    function report (extra) {
      // wyb
      const endTime = Date.now()
      const durationTime = endTime - startTime
      console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code) + (extra || '') + ' ' + MillisecondToDate(durationTime))
      
      // console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code) + (extra || ''))
      resolve()
    }

    fs.writeFile(dest, code, err => {
      if (err) return reject(err)
      if (zip) {
        zlib.gzip(code, (err, zipped) => {
          if (err) return reject(err)
          report(' (gzipped: ' + getSize(zipped) + ')')
        })
      } else {
        report()
      }
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function logError (e) {
  console.log(e)
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}

// wyb
function MillisecondToDate(msd) {
  var time = parseFloat(msd) / 1000;
  if (null != time && "" != time) {
      if (time > 60 && time < 60 * 60) {
          time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) -
              parseInt(time / 60.0)) * 60) + "秒";
      }
      else if (time >= 60 * 60 && time < 60 * 60 * 24) {
          time = parseInt(time / 3600.0) + "小时" + parseInt((parseFloat(time / 3600.0) -
              parseInt(time / 3600.0)) * 60) + "分钟" +
              parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
              parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
      }
      else {
          time = parseInt(time) + "秒";
      }
  }
  return time;
}