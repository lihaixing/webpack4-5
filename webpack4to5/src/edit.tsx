import React, { useState, useEffect } from 'react';

import E from 'wangEditor'
import i18n from 'i18next'

let editor: any = null
const IndexView = (props: any) => {
  const [content, setContent] = useState('')
  useEffect(() => {
    // 注：class写法需要在componentDidMount 创建编辑器
    editor = new E("#div1")
    editor.i18next = i18n;
    editor.config.uploadImgServer = '/live/api/v1/util/logo?securityKey=2fd68be6a67e825a58930708ec5ca2ca1761dcf0a18'
    editor.config.onchange = (newHtml: any) => {
      setContent(newHtml)
    }
    // 自己实现图片上传过程
    //   editor.config.customUploadImg = function (resultFiles:any, insertImgFn:any) {
    //     // resultFiles 是 input 中选中的文件列表
    //     // insertImgFn 是获取图片 url 后，插入到编辑器的方法
    //     // debugger
    //     // 上传图片，返回结果，将图片插入到编辑器中
    //     // insertImgFn(imgUrl)
    // }
    // editor.config.withCredentials = true

    editor.config.uploadFileName = 'logo'
    editor.config.lang = 'en'
    editor.config.languages['en'] = {
      wangEditor: {
        插入: 'insert',
        默认: 'default',
        创建: 'create',
        修改: 'edit',
        如: 'like',
        请输入正文: 'please enter the text',
        menus: {
          dropListMenu: {
            设置标题: 'title',
            背景颜色: 'background',
            文字颜色: 'font color',
            设置字号: 'font size',
            设置字体: 'font family',
            设置缩进: 'indent',
            对齐方式: 'align',
            设置行高: 'line heihgt',
            序列: 'list',
            head: {
              正文: 'text',
            },
            indent: {
              增加缩进: 'indent',
              减少缩进: 'outdent',
            },
            justify: {
              靠左: 'left',
              居中: 'center',
              靠右: 'right',
            },
            list: {
              无序列表: 'unordered',
              有序列表: 'ordered',
            },
          },
          panelMenus: {
            emoticon: {
              默认: 'default',
              新浪: 'sina',
              emoji: 'emoji',
              手势: 'gesture',
            },
            image: {
              图片链接: 'image link',
              上传图片: 'upload image',
              网络图片: 'network image',
            },
            link: {
              链接: 'link',
              链接文字: 'link text',
              删除链接: 'delete',
              查看链接: 'view',
            },
            video: {
              插入视频: 'insert video',
            },
            table: {
              行: 'row',
              列: 'column',
              的: ' ',
              表格: 'table',
              添加行: 'add row',
              删除行: 'delete row',
              添加列: 'add column',
              删除列: 'delete column',
              设置表头: 'set header',
              取消表头: 'cancel header',
              插入表格: 'insert table',
              删除表格: 'delete table',
            },
            code: {
              删除代码: 'delete code',
              修改代码: 'edit code',
              插入代码: 'insert code',
            },
          },
        },
        validate: {
          张图片: 'images',
          大于: 'greater than',
          图片链接: 'image link',
          不是图片: 'is not image',
          返回结果: 'return results',
          上传图片超时: 'upload image timeout',
          上传图片错误: 'upload image error',
          上传图片失败: 'upload image failed',
          插入图片错误: 'insert image error',
          一次最多上传: 'once most at upload',
          下载链接失败: 'download link failed',
          图片验证未通过: 'image validate failed',
          服务器返回状态: 'server return status',
          上传图片返回结果错误: 'upload image return results error',
          请替换为支持的图片类型: 'please replace with a supported image type',
          您插入的网络图片无法识别: 'the network picture you inserted is not recognized',
          您刚才插入的图片链接未通过编辑器校验: 'the image link you just inserted did not pass the editor verification',
        },
      }
    };
    editor.config.uploadImgHooks = {
      // 上传图片之前
      // before: function(xhr) {
      //     console.log(xhr)

      //     // 可阻止图片上传
      //     return {
      //         prevent: true,
      //         msg: '需要提示给用户的错误信息'
      //     }
      // },
      // 图片上传并返回了结果，图片插入已成功
      // success: function(xhr) {
      //     console.log('success', xhr)
      // },
      // 图片上传并返回了结果，但图片插入时出错了
      // fail: function(xhr, editor, resData) {
      //     console.log('fail', resData)
      // },
      // 上传图片出错，一般为 http 请求的错误
      // error: function(xhr, editor, resData) {
      //     console.log('error', xhr, resData)
      // },
      // 上传图片超时
      // timeout: function(xhr) {
      //     console.log('timeout')
      // },
      // 图片上传并返回了结果，想要自己把图片插入到编辑器中
      // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
      customInsert: function (insertImgFn: any, result: any) {
        // debugger
        // result 即服务端返回的接口
        console.log('customInsert', result)

        // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
        insertImgFn(result)
      }
    }
    editor.config.menus = [
      'head',
      'bold',
      'fontSize',
      // 'fontName',  
      // 'italic',   
      // 'underline',
      // 'strikeThrough',
      'indent',
      'lineHeight',
      // 'foreColor',
      // 'backColor',
      'link',
      'list',
      'justify',
      // 'quote',
      // 'emoticon',
      'image',
      // 'video',
      // 'table',
      // 'code',
      // 'splitLine',
      // 'undo',
      // 'redo',
    ]
    /**一定要创建 */
    editor.create()

    return () => {
      // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
      editor.destroy()
    }
  }, [])

  return (
    <div>
      <div id="div1"></div>
      <div dangerouslySetInnerHTML={{ __html: content }}/>
    </div>
  );
}

export default IndexView;