<template>
    <div class="layout-body">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <article class="article">
                        <h1>{{ $t('courseDesc') }}</h1>
                        小菜单
                        <ul>
                            <li><router-link to="/courses/1">（1）  肩颈酸痛改善班</router-link></li>
                            <li><router-link to="/courses/2">（2）  永不复胖姿势调整班</router-link></li>
                            <li><router-link to="/courses/3">（3）  塑身机媒体班</router-link></li>
                            <li><router-link to="/contact">（4）  全面芭杆耐力一级</router-link></li>
                            <li><router-link to="/contact">（5）  halo核心强化班</router-link></li>
                            <li><router-link to="/contact">（6）  什么是普拉提？</router-link></li>
                            <li><router-link to="/contact">（（7）  关于紫然肌</router-link></li>
                        </ul>
                    </article>
                </div>
                <div class="col-sm-6">

                    什么是普拉提
                    Pilates(普拉提）是以德国人约瑟夫·休伯特斯·普拉提(Joseph Hubertus Pilates)姓氏命名的一种运动方式和技能。普拉提是一项运动，也是一门艺术，更是一门自然科学。通过训练人体的肌肉群，强化和稳定核心，把我们的身体雕塑到最理想的状态。
                    为什么要学习普拉提？
                    普拉提对缓解腰背疼痛有惊人的作用，同时对身体的控制、平衡有极大的改善。它侧重于身体的正确排列、运动的流畅、专注、呼吸等。当你将所有的这些方面联系到一起时，普拉提练习就变成了一个身心灵的锻炼。
                    这种锻炼方法可以塑造一个强大的核心，普拉提运动可以改善关节的灵活性和柔韧性，减少肌肉损伤的风险。

                    （7）  关于紫然肌

                    紫然肌简介
                    紫然肌身活馆创立于2015年,致力打造中山首家专业普拉提健身机构,引进国外最先进的普拉提健身器械,协同最资深的普拉提健身导师,引进加拿大安普拉提瑜伽教育中心最新最专业的课程,为热爱普拉提,追求健康的你们提供名流明星们最推崇的健身塑身体验。
                    紫然肌身活馆本着“专业，健康，快乐，舒适”的理念，以真诚的心去创造一个和谐的普拉提交流平台，结合国外最专业的普拉提课程，帮助您把身体调整至自然、理想、健康的状态，达到训练深层肌群、稳定骨骼、修正肌肉收缩模式、减缓老化的效果，还你一个健康的身体。
                    风靡欧洲的普拉提由于具有“减肥效果”“修身塑形”而颇受关注，本馆开设了“普拉提基础班”“普拉提肩颈酸痛改善班”“马甲线雕塑班”“永不复胖姿势调整班”等课程，快速塑型，重点雕塑，让你由内到外变得既柔韧又结实，给你一个真正的美丽身姿。

                    点进去会有每项课程的详细介绍
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import i18n from '@/i18n'

    export default {
        i18n,
        created: function () {
            console.log(this.$i18n);
            console.log('create')
        }
    }

    console.log(this)
    console.log(this.$i18n)

</script>