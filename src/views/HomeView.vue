<template>
  <div style="background-color: #f4f5fa">
    <div class="bag">
      <!-- 轮播图 -->
      <div>
        <div class="slideshow">
          <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item>
              <img src="../assets/1.jpeg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/2.jpeg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/3.jpeg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/4.jpeg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/5.jpeg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/6.jpeg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/7.jpeg" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 介绍顶部 -->
      <div>
        <div class="name">
          数据供需
          <p>10W+数据用户需求发布，在线供需对接</p>
        </div>
      </div>
      <!-- 内容区 -->
      <div class="nei" >
        <div class="introduce" v-for="(item,i) in items " :key="i">
          <div class="introduce_top">
            <div class="introduce_left">
              {{item.title}}
              <p>{{item.num}}人想要</p>
            </div>
            <div class="introduce_right">
              <el-button type="primary" @click="item.num++">我也想要</el-button>
              </div>
            <div class="introduce_foot">
              <p>{{item.nr}}</p>
              <span>数据集形式</span>
              <span>长期有效</span>
            </div>
          </div>
        </div>


      </div>

     <!-- 行业动态  -->
       <div>
      <div class="name">
          行业动态
          <p>最新行业重点资讯介绍，最速行业热点分析解读</p>
        </div>
        <div v-if="data" class="dynamic-state">
        <div v-for="report in data" :key="report.cid" >
          <div v-if="report.cid<5">
         <div class="report" >
          <img :src="report.img" alt="" />
          <div class="report_part">
            <div>
              <router-link :to="`/detail?cid=${report.cid}`"><span>{{ report.headline }}</span></router-link> 
              <p>{{ report.SubTitle }}</p>
            </div>
            <div class="time">
              <span>{{ report.time }}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
        </div>
        </div>
      <!-- 客户 -->
       <div class="kh">
        <div class="name">
          我的客户
        </div>
        <ul>
        <img src="/1汽车之家.2b2c0b3.png" alt="">
        <img src="/2滴滴出行.d96b291.png" alt="">
        <img src="/3瓜子.0f7b5f8.png" alt="">
        <img src="/4华为.0d86150.png" alt="">
        <img src="/5卖好车.8d8bee7.png" alt="">
        <img src="/6爱卡.0a30d27.png" alt="">
        <img src="/7新浪.0f10dd3.png" alt="">
        <img src="/8中国建设.c3d77f7.png" alt="">
        <img src="/9平安.d28da64.png" alt="">
        <img src="/10太平洋保险.fef0e8c.png" alt="">
        <img src="/11天弘基金.aa4d1d5.png" alt="">
        <img src="/12奥托立夫.0a3d09b.png" alt="">
        <img src="/13中国石化.cec9432.png" alt="">
        <img src="/14依威能源.9e4a87e.png" alt="">
        <img src="/15毕马威.b3ce61e.png" alt="">
        </ul>
        
 
      
      </div>
      


    </div>
  </div>
</template>
<script>
export default {
  data() {
  
    return {
        data:null,
      items:[{title: '区县级销售数据',nr:'能精细到具体某县市乘用车销量数据',num:0},
      {title: '商用车保有量',nr:'能细分至省份城市和品牌车型的年度商用车保有量数据',num:0},
      {title: 'OTA升级迭代分析',nr:'不同品牌/车型的OTA迭代功能及策略进行深度剖析',num:0},
      {title: '充电桩利用率',nr:'主要充电服务商直营充电桩利用率',num:0},
      {title: '电机和电池参数',nr:'电池系统，密度，电量；驱动电机品牌，数量，额定功率最大功率；',num:0},
      {title: '区县级销售数据',nr:'能精细到具体某县市乘用车销量数据',num:0}]
      
    };
  },
  mounted() {
    this.content();
  },
  methods: {
    content() {
      this.axios.get("http://127.0.0.1:3000/v1/content/consult").then((res) => {
        // console.log(res);
        this.data = res.data.data;
      });
    },
  },

};
</script>

<style lang="scss" scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.bag {
  width: 1184px;
  margin: 0 auto;
}
img {
  width: 600px;
  height: 400px;
}
.slideshow {
  margin: 20px;
  background-color: #ffff;
}
.name {
  font-size: 30px;
  font-weight: 800;
  height: 75px;
  margin: 20px;
}
.name p {
  font-size: 15px;
  font-weight: 200;
}
.introduce {
  background-color: #ffff;
  width: 380px;
  height: 200px; 
   margin-top: 10px;
}
.introduce_top {
  padding: 24px;
}
.introduce_left {
  float: left;
}
.introduce_right {
  float: right;
}
.introduce_foot {
  float: left;
}
.introduce_foot p{ 
  width: 380px;
  font-size: 12px;
}
.nei {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}

.kh img{
 width: 224px;
 height: 88px; 
 margin-top: 10px;
}
.kh ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;

}
.report{
  display: flex;
  width:540px;
  background-color: #fafbfc;
  margin: 15px;
  border-bottom:1px solid #fafbfc ;
}
.report img{
width: 200px;
height: 150px;
 cursor: pointer;
}
.report_part{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left:15px;

}
.report_part span{
    font-size: 16px;
}
.report_part p{
    font-size: 12px;
    color: #5a6274;
    margin-top: 8px;
    line-height: 20px;
    overflow: hidden;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}
.time span{
    font-size: 12px;
    color:#a7b1c1;
}
.dynamic-state{
  display: flex;
  flex-wrap: wrap;
}

</style>
