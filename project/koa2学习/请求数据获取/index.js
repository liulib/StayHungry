/*
 * @Author       : liulib
 * @Date         : 2020-07-27 22:35:49
 * @LastEditors  : liulib
 * @LastEditTime : 2020-07-27 22:38:55
 */

const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  let url = ctx.url
  // 这里从上下文的request对象中获取
  let request = ctx.request
  let req_query = request.query
  let req_querystring = request.querystring

  // 从上下文中直接获取
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring,
  }
})

app.listen(3000, () => {
  console.log('[demo] request get is starting at port 3000')
})
