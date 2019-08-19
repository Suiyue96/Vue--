<template>
    <!--首页头部-->
    <header class="header">
        <slot name="left"></slot>
        <a class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
        </a>
        <slot name="right"></slot>
    </header>
</template>

<script>
export default {
    //设置标签，进行组件间的通信 
    props:{
        title: String
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.header
    background-color #02a774
    position fixed
    z-index 100
    top 0
    left 0
    width 100%
    height 45px
    .header_search 
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
            font-size 25px
            color #fff
    .header_title
        // 元素居中显示
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
        width 50%
        height 50%
        color #fff
        text-align center
        .header_title_text
            font-size 20px
            color #fff
            display block
    .header_login 
        position absolute
        font-size 14px
        right 15px
        top 50%
        transform translateY(-50%)
        width 20%
        height 50%
        line-height 1.5
        text-align right
        .header_login_text
            color #fff
</style>
