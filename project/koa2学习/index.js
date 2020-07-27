/*
 * @Author       : liulib
 * @Date         : 2020-07-27 21:10:30
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-27 21:14:05
 */
const koa = require('koa')
const app = new koa()

app.use(async (ctx) => {
  ctx.body = 'hello koa2'
})

app.listen(3000)
console.log('app is running on port 3000')
