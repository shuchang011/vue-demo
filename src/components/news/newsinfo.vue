<template>
    <div id=tmpl>

        <div class="mui-card">
            <div class="mui-card-header mui-card-media">
                <img :src="list.images.large" alt="">
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>{{list.title}}</p>
                    <p style="color: #333;">{{list.summary}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                list:null,
                id:0
            }
        },
        methods:{
            getList(){
                this.$http.jsonp('http://api.douban.com/v2/movie/subject/'+ this.id,{ credentials: true }).then(res=>{
                    this.list = res.body;
                    console.log(this.list)
                })
            }
        },
        created(){
            this.id = this.$route.params.id
            this.getList()
        }
    }
</script>
<style scoped>
    .mui-card{
        margin-top:50px;
    }
    .mui-card-header.mui-card-media{
        height: 1000px;
        width: 100%;
    }
    .mui-card-header > img:first-child{
        height: 100%;
        width: 100%;
    }
    .mui-card-header:after, .mui-card-footer:before{
        background-color: #fff;
    }
</style>
