<template>
<!-- 详情页 -->
    <div v-if="data" class="bag">
        <div v-for="x in data" :key="x.cid" class="detail">
        <div>{{x.headline}}</div>
         <div>
            {{moment.unix(x.release_time).format('YYYY年MM月DD日 hh:mm')}}
            </div>
        <div v-html="x.content"></div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: null
            }
        },
         watch : {
            '$route.query.cid'(){
                this.content()
            }
        },
        mounted () {
            this.content();
        },
        methods: {
            content() {
          this.axios.get(`http://127.0.0.1:3000/v1/contentone/consultone?cid=${this.$route.query.cid}`).then((res) => {
           console.log(res);
           this.data = res.data.data;

      });
    },
        },
        
    }
</script>

<style lang="scss" scoped>
.detail{
    width: 70%;
}
.bag {
  width: 1184px;
  margin: 0 auto;
}
</style>