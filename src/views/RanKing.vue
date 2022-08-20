<template>
  <div>
    <!-- 照片 -->
    <div style="width=1184px">
      <img src="banner.png" alt="" style="width: 1333px; height: 240px" />
    </div>
    <div class="bag">
      <!-- 导行栏部分 -->
      <div class="title_top">
        <div v-for="(title, i) in titles" :key="i">
          <span @click="sb = i" :class="{ active: sb == i }">{{ title }}</span>
        </div>
      </div>
      <!-- 内容部分 -->
      <div v-if="data">
        <div v-show="sb == 0" class="top">
          <div class="id">
          <h3>6月品牌销量</h3>
          <div class="list">
            <table>
              <tr>
                <th><span>排名</span></th>
                <th><span>品牌</span></th>
                <th><span>销量</span></th>
              </tr>
            </table>
            <tbody v-for="(x,i) in data" :key="i">
                <tr v-if="i<10">
                  <td><span>{{ i+1 }}</span></td>
                  <td><span>{{ x.brand }}</span></td>
                  <td><span>{{ x.sales_volume }}</span></td>
                </tr>
            </tbody>
          </div></div>
            <div class="id">
          <h3>6月suv销量</h3>
          <div class="list">
            <table>
              <tr>
                <th><span>排名</span></th>
                <th><span>品牌</span></th>
                <th><span>销量</span></th>
              </tr>
            </table>
            <tbody v-for="(x,i) in data" :key="x.id">
                <tr v-if="i<10">
                  <td><span>{{i+1}}</span></td>
                  <td><span>{{ x.brand }}</span></td>
                  <td><span>{{ x.sales_volume }}</span>
                  </td>
                </tr>
            </tbody>
          </div></div>
            <div class="id">
          <h3>6月品牌销量</h3>
          <div class="list">
            <table>
              <tr>
                <th><span>排名</span></th>
                <th><span>品牌</span></th>
                <th><span>销量</span></th>
              </tr>
            </table>
            <tbody v-for="(x,i) in data" :key="i">
                <tr v-if="i<10">
                  <td><span>{{ i+1 }}</span></td>
                  <td><span>{{ x.brand }}</span></td>
                  <td><span>{{ x.sales_volume }}</span></td>
                </tr>
            </tbody>
          </div></div> 
          <div class="id">
          <h3>6月品牌销量</h3>
          <div class="list">
            <table>
              <tr>
                <th><span>排名</span></th>
                <th><span>品牌</span></th>
                <th><span>销量</span></th>
              </tr>
            </table>
            <tbody v-for="(x,i) in data" :key="i">
                <tr v-if="i<10">
                  <td><span>{{ i+1 }}</span></td>
                  <td><span>{{ x.brand }}</span></td>
                  <td><span>{{ x.sales_volume }}</span></td>
                </tr>
            </tbody>
          </div></div>
            <div class="id">
          <h3>6月品牌销量</h3>
          <div class="list">
            <table>
              <tr>
                <th><span>排名</span></th>
                <th><span>品牌</span></th>
                <th><span>销量</span></th>
              </tr>
            </table>
            <tbody v-for="(x,i) in data" :key="i">
                <tr v-if="i<10">
                  <td><span>{{ i+1 }}</span></td>
                  <td><span>{{ x.brand }}</span></td>
                  <td><span>{{ x.sales_volume }}</span></td>
                </tr>
            </tbody>
          </div></div>
        </div>
        <div v-show="sb == 1">
            <div class="id">
          <h3>6月品牌销量</h3>
          <div class="list">
            <table>
              <tr>
                <th><span>排名</span></th>
                <th><span>品牌</span></th>
                <th><span>销量</span></th>
              </tr>
            </table>
            <tbody v-for="(x,i) in data" :key="i">
                <tr v-if="i<10">
                  <td><span>{{ i+1 }}</span></td>
                  <td><span>{{ x.brand }}</span></td>
                  <td><span>{{ x.sales_volume }}</span></td>
                </tr>
            </tbody>
          </div></div>
      
        </div>
        <div v-show="sb == 2">
            <div class="id">
          <h3>6月品牌销量</h3>
          <div class="list">
            <table>
              <tr>
                <th><span>排名</span></th>
                <th><span>品牌</span></th>
                <th><span>销量</span></th>
              </tr>
            </table>
            <tbody v-for="(x,i) in data" :key="i">
                <tr v-if="i<10">
                  <td><span>{{ i+1 }}</span></td>
                  <td><span>{{ x.brand }}</span></td>
                  <td><span>{{ x.sales_volume }}</span></td>
                </tr>
            </tbody>
          </div></div>
        </div>
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
      titles: ["新能源销量排行榜", "销量排行榜", "能源销量排行榜"],
    };
  },
  mounted() {
    this.downlond();
  },
  methods: {
    downlond() {
      this.axios.get("http://127.0.0.1:3000/v1/car/list").then((res) => {
        // console.log(res);
        this.data = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.title_top {
  width: 100%;
  display: flex;
}
.title_top span {
  user-select: none;
  margin-right: 40px;
  line-height: 80px;
  &.active {
    font-size: 20px;
    color: blue;
  }
}
.bag {
  width: 1184px;
  margin: 0 auto;
}
h3{
  padding: 20px;
  border: 1px solid rgb(58, 58, 58);
   border-top: 5px solid black;
     text-align: center;
}
.id{
  width: 240px;
  padding:0 0 30px 30px;
   
}
.list th{
width:80px;
font-size: 12px;
line-height: 40px;
}
.list td{
width:80px;
  line-height: 40px;
  text-align: center;
}
.list{
   border: 1px solid rgb(58, 58, 58);
}
.top{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>