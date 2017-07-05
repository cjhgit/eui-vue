/**
 * Created by hang on 2017/7/3.
 */

var fontCarrier = require('font-carrier')
var fs = require('fs')

// 创建空白字体，使用svg生成字体
var font = fontCarrier.create()
var love = fs.readFileSync('./src/font/svgs/link.svg').toString()
var remove = fs.readFileSync('./src/font/svgs/remove.svg').toString()

//使用汉字
font.setGlyph('爱', {
    svg: love,
    glyphName:'爱'
})

// 使用unicode
font.setSvg('&#xe601;', remove)

font.output({
    path:'./static/static'
})