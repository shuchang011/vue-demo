<template>
    <div id="tmpl">
<!--        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" >
                <router-link v-bind="{to:'/news/newsinfo/' +item.id }">
                    <img class="mui-media-object mui-pull-left" :src="item.images.small">
                    <div class="mui-media-body">{{item.title}}
                        <p class='mui-ellipsis'><span v-for="genre in item.genres"> {{genre}} </span></p>
                    </div>
                </router-link>
            </li>
        </ul>-->

        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="item in list">
                <router-link v-bind="{to:'/news/newsinfo/' +item.id }" class="mui-navigate-right">
                    <img class="mui-media-object mui-pull-left" :src="item.images.small">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'><span v-for="genre in item.genres"> {{genre}} </span></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {list:[]}
        },
        methods:{
            getData(){
                this.$http.jsonp('http://api.douban.com/v2/movie/top250?start=4&count=6', { credentials: true }).then((res)=>{
                    this.list = res.body.subjects
                    console.log(res.body.subjects)
                })
            }
        },
        created(){
            this.getData()
        }

    }
</script>
<style scoped>

</style>