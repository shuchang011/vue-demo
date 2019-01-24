<template>
    <div>
        <mt-header fixed title="fixed top"></mt-header>
        <router-view></router-view>
        <nav class="mui-bar mui-bar-tab">
            <router-link to="/home" class="mui-tab-item">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to="/goods" class="mui-tab-item">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link to="/shopcar" class="mui-tab-item">
                <span class="mui-icon mui-icon-contact">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link to="/tabbar-with-map" class="mui-tab-item">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>

</style>