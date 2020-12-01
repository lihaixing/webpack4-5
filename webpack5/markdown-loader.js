const marked = require('marked');
module.exports = (source) => {
  const html = marked(source);

  let htmlStr = JSON.stringify(html);
  htmlStr+=`\nloader source=====> ${source}`
  // 返回值就是最终被打包的内容
  // return `export default ${JSON.stringify(html)}` // json字符串将换行符转换掉
  return `${JSON.stringify(html)} htmlStr: ${htmlStr}` // 直接返回字符串给下一个loader使用
}