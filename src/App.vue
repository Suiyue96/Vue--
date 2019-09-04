<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuider v-show="$route.meta.showFooter"></FooterGuider>
    </div>
</template>

<script>
import FooterGuider from './components/FooterGuider/FooterGuider.vue'
//获取食品分类列表
import {reqCategorys} from '../src/api'
export default {
    async mounted(){
        const result = await reqCategorys();
        console.log(result);
    },

    components: {
        FooterGuider
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #app
        width 100%
        height 100%
        background #f5f5f5
</style>
