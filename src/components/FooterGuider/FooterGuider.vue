<template>
    <div class="footer_guider border-1px">
        <!-- 外卖 -->
        <!-- href="javascript:;"防止页面跳转 -->
        <a href="javascript:;" class="guide_item" @click="goto('/msite')" :class="{on: isCurrent('/msite')}">
            <span class="item_icon">
                <i class="iconfont icon-waimai"></i>
            </span>
            <span>外卖</span>
        </a>
        <!-- 搜索 -->
        <a href="javascript:;" class="guide_item" @click="goto('/search')" :class="{on: isCurrent('/search')}">
            <span class="item_icon">
                <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goto('/order')" :class="{on: isCurrent('/order')}">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
            <span class="item_icon">
                <i class="iconfont icon-geren"></i>
            </span>
            <span>我的</span>
        </a>
    </div>
</template>

<script>
export default{
    methods: {
        goto(path){
            this.$router.replace(path)
        },
        isCurrent(path){
            //$route.path是当前路径
            return this.$route.path === path
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.footer_guider
    top-border-1px(#e4e4e4)
    position fixed
    bottom 0
    left 0
    right 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
        display flex
        flex 1
        text-align center
        flex-direction column
        margin 5px
        color #999999
        &.on
            color #02a774
        span
            font-size 12px
            margin-top 2px
            margin-bottom 2px
        .iconfont
            font-size 22px
</style>