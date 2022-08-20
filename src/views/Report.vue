<template>
  <div class="bag" v-if="data">
    <div class="top">
      <div v-for="(title, i) in titles" :key="i">
        <span @click="sb = i" :class="{ active: sb == i }">{{ title }}</span>
      </div>
    </div>
    <div class="top">
      <div v-show="sb == 0" v-for="(list, s) in lists" :key="s">
        <span @click="x = s" :class="{ active: x == s }">{{ list }}</span>
      </div>
    </div>

    <div v-show="(x == 0) & (sb == 0)">
      <div v-if="data">
        <div v-for="report in data" :key="report.cid" >
          <div v-if="report.classification=='energy'">
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
    <div v-show="(x == 1) & (sb == 0)">
            <div v-if="data">
        <div v-for="report in data" :key="report.cid" >
          <div v-if="report.classification=='marketing'">
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
    <div v-show="(x == 2) & (sb == 0)">
            <div v-if="data">
        <div v-for="report in data" :key="report.cid" >
          <div v-if="report.classification=='smarts'">
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

    <div v-show="sb == 1" v-if="data">
      <div v-for="report in data" :key="report.cid">
        <p>{{ report.headline}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      sb: 0,
      x: 0,
      titles: ["资讯", "快讯"],
      lists: ["新能源", "市场销售", "智能网联"],
    };
  },
  mounted() {
    this.content();
  },
  methods: {
    content() {
      this.axios.get("http://127.0.0.1:3000/v1/content/consult").then((res) => {
        console.log(res);
        this.data = res.data.data;
      });
    },
  },
};
</script>
<style  lang="scss" scoped>
.bag {
  width: 1184px;
  margin: 0 auto;
}
.top {
  width: 100%;
  display: flex;
}
.top span {
  user-select: none;
  margin-right: 40px;
  line-height: 80px;
  &.active {
    font-size: 24px;
    font-weight: 600;
    color: blue;
    padding-bottom: 20px;
    border-bottom: 2px solid blue;
  }
}
.report{
  display: flex;
  width: 70%;
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
</style>