<template>
  <div class="top">
    <!-- <router-link to="/">首页</router-link> -->
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>

    <div>
      <div class="title">
        <button @click="app">首页</button>
        <button @click="listcar">数据超市</button>
        <button @click="ranking">行业磅单</button>
        <button @click="report">行业咨询</button>
        <button @click="about">关于我们</button>

        <div v-if="uname">
          <span>欢迎:{{uname}} |<button @click="updateUname(null)">退出</button> 
          </span>
          <span>用户中心</span>
        </div>
        <div v-else>
          <el-button type="text" @click="dialogVisible = true"
            ><login></login
          ></el-button>
          <el-button type="text" @click="dialogVisible = true"
            ><register></register
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import { mapMutations, mapState } from 'vuex';

export default {
  components: { Login, Register },
  computed: {
    ...mapState(['uname'])
  },

  data() {

    Register;
    return {
      dialogVisible: false,
    };
    
  },
  methods: {
    ...mapMutations(['updateUname']),
    app() {
         if (this.$route.path == '/') return
      this.$router.push("/");
    },
    listcar() {
          if (this.$route.path == '/listcar') return
      this.$router.push("/listcar");
    },
    ranking() {
          if (this.$route.path == '/ranking') return
      this.$router.push("/ranking");
    },
    report() {
          if (this.$route.path == '/report') return
      this.$router.push("/report");
    },
    about() {
          if (this.$route.path == '/about') return
      this.$router.push("/about");
    },
    
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #666;
}
button{
    border: none;
}
.top {
  height: 68px;
  display: flex;
  margin-bottom: 20px;

}
.title {
  width: 900px;
  display: flex;
  justify-content: space-between;
}
.title button {
  background-color: white;
  width: 110px;
  height: 68px;
}

 .title button:focus{outline:0;
 color: blue;
 font-size: 24px;}
.logo {
  height: 68px;
  width: 360px;
}
img {
  height: 68px;
  width: 360px;
}
</style>