<template>
    <div id="tmpl">
        <mt-swipe :show-indicators="false">
            <mt-swipe-item v-for="item in list">
                <img :src="item.images.large" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newslist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodslist">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商口购物</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-more"></span>
                        <div class="mui-media-body">more</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {list:[]}
        },
        methods:{
            getData(){
                this.$http.jsonp('http://api.douban.com/v2/movie/top250?start=4&count=6', { credentials: true }).then(function(res){
                    this.list = res.body.subjects;
                    }
                )
            }
        },
        created(){
            this.getData()
        }
    }
</script>
<style scoped>
    .mint-swipe{
        height: 450px;
        width: 100%;
    }
    .mint-swipe-items-wrap{
        height: 450px;
        width: 100%;
    }
    .mint-swipe-item{
        height: 450px;
        width: 100%;
        overflow: hidden;
    }
    .mint-swipe-item > img{
        width: 100%;
    }
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before
    {
        content: "";
        display: inline-block;
        width: 40px;
        height: 40px;

    }
    .mui-icon-home:before{
        background:url("../../www/images/1.png");
        -webkit-background-size: 100%;
        background-size: 100%;
    }
    .mui-icon-email:before{
        background:url("../../www/images/2.png");
        -webkit-background-size: 100%;
        background-size: 100%;
    }
    .mui-icon-chatbubble:before{
        background:url("../../www/images/3.png");
        -webkit-background-size: 100%;
        background-size: 100%;
    }
    .mui-icon-location:before{
        background:url("../../www/images/4.png");
        -webkit-background-size: 100%;
        background-size: 100%;
    }
    .mui-icon-search:before{
        background:url("../../www/images/5.png");
        -webkit-background-size: 100%;
        background-size: 100%;
    }
    .mui-icon-phone:before{
        background:url("../../www/images/6.png");
        -webkit-background-size: 100%;
        background-size: 100%;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: 0;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0;
    }
</style>