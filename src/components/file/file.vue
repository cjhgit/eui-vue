<template>
    <div>
        <button class="btn btn-primary" @click="uploadImage"><slot></slot></button>
        <input id="input-file" type="file" @change="filechange($event)" style="display: none">
    </div>
</template>
<script>
    const prefixCls = 'icon';

    export default {
        name: 'Icon',
        props: {
            url: String,
            success: Function
        },
        computed: {
            classes () {
                return `${prefixCls} ${prefixCls}-${this.type}`;
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }

                return style;
            }
        },
        methods: {
            uploadImage() {
                //this.$emit('change', this.file);
                document.getElementById('input-file').click();
            },
            filechange(e) {
                console.log('哈哈')
                this.input=e.target

                if (!e.target.files.length) {
                    return
                }

                this.myfile = e.target.files[0]
                console.log(this.myfile)

                var zipFormData = new FormData();
                zipFormData.append('upfile', this.myfile, 'test.zip');//filename是键，file是值，就是要传的文件，test.zip是要传的文件名
                this.$http.post(this.url, zipFormData, {
                   /* headers: {
                        'Lc-Lang': this.$route.params.lang === 'en' ? 'en' : 'zh',
                        'X-Auth-Token': localStorage.mytoken
                    },*/
                }).then(function(response) {
//                    this.uploadUrl = response.body
                    console.log('ui-file', response.body)
                    this.success(response.body.url, response.body)
                }, function(err) {
                    //alert("goodbye world")
                    console.log(err)
                })
            },
        }
    };
</script>
