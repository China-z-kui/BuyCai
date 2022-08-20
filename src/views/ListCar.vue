<template>
  <div v-if="data">
    <template>
      <el-tabs :tab-position="tabPosition" style="height:100vh">
        <el-tab-pane label="全国信息">
          <div class="car">
            <table>
              <thead>
                <tr>
                  <th>厂商</th>
                  <th>品牌</th>
                  <th>车型</th>
                  <th>排挡</th>
                  <th>排量</th>
                  <th>燃料类型</th>
                  <th>汽车类别</th>
                  <th>汽车类型</th>
                  <th>细分市场</th>
                  <th>零售量(辆)</th>
                </tr>
              </thead>
              <tbody v-for="x in data" :key="x.id">
                <tr>
                  <td>{{x.manufacturer}}</td>
                  <td>{{x.brand}}</td>
                  <td>{{x.car_type}}</td>
                  <td>{{x.gear}}</td>
                  <td>{{x.cc}}</td>
                  <td>{{x.fuel_type}}</td>
                  <td>{{x.car1_type}}</td>
                  <td>{{x.car2_type}}</td>
                  <td>{{x.market_segment}}</td>
                  <td>{{x.sales_volume}}</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="山西本地">
           <div>
            <table>
              <thead>
                <tr>
                  <th>厂商</th>
                  <th>品牌</th>
                  <th>车型</th>
                  <th>排挡</th>
                  <th>排量</th>
                  <th>燃料类型</th>
                  <th>汽车类别</th>
                  <th>汽车类型</th>
                  <th>细分市场</th>
                  <th>零售量(辆)</th>
                </tr>
              </thead>
              <tbody v-for="x in data" :key="x.id">
                <tr v-if="x.areasx=='sx'">
                  <td>{{x.manufacturer}}</td>
                  <td>{{x.brand}}</td>
                  <td>{{x.car_type}}</td>
                  <td>{{x.gear}}</td>
                  <td>{{x.cc}}</td>
                  <td>{{x.fuel_type}}</td>
                  <td>{{x.car1_type}}</td>
                  <td>{{x.car2_type}}</td>
                  <td>{{x.market_segment}}</td>
                  <td>{{x.sales_volume}}</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="绘图">绘图</el-tab-pane>
       
      </el-tabs>
    </template>
  </div>
</template>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      tabPosition: "left"
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
.car{
  width: 1180px;
}

</style>