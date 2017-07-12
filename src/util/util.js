
class Util {

	// 去除 HTML 标签，只保留纯文本
	static removeHtmlTag(str) {
        str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
        str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
        //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
        str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
        str=str.replace(/\s/g,''); //将空格去掉
        return str;
    }

    // 获取 HTML 中的图片列表（保留相对 URL）
    static getImagesFromHtml(html) {
        let regex = /<img.*?src="(.*?)"/gi
        var a = html.match(regex)
        console.log(a)
        let arr = []
        html.replace(regex, (a, imgUrl) => {
            if (imgUrl.indexOf('liangchuan.com') !== -1) { // TODO 判断是否是本服务器的图片
                arr.push('upload' + imgUrl.split('upload')[1])
            }
        })
        console.log('返回')
        return arr
    }

    // 获取文件后缀
    static fileExt(path) {
        return path.split('.').pop().toLowerCase();
    }

    // 获取文件类型
    static fileType(path) {
	    let ext = this.fileExt(path)
        switch (ext) {
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'bmp':
                return 'image'
            default:
                return ''
        }
    }
}

export default Util