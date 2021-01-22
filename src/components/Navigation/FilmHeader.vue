<template>
    <div style="height:44px">
        <div :class="{topheader: show}">
            <van-tabs @click="changeTab" v-model="active">
                <van-tab title="正在热映"></van-tab>
                <van-tab title="即将上映"></van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
    data() {
        return {
            // 是否吸顶，true=吸顶，false=不吸顶
            show: true,
            active: 0,
            url: ["/films/nowplaying", "/films/comingsoon"],
        };
    },
    created() {
        // 刷新的时候去纠正索引
        this.active = this.url.indexOf(this.$route.path);
    },
    mounted() {
        // 监听滚动事件
        window.addEventListener("scroll", () => {
            // 获取滚动条的位置
            let top = document.documentElement.scrollTop;
            if (top > 100) {
                // 吸顶
                this.show = true;
            } else {
                // 不吸顶
                this.show = false;
            }
        });
    },
    methods: {
        changeTab(index) {
            this.$router.push(this.url[index]);
        },
    },
};
</script>

<style lang="scss" scoped>
// 吸顶的样式
.topheader {
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
}
</style>
