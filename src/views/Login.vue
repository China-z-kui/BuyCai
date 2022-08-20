<template>
  <div class="login">
    <el-button type="text" @click="dialogVisible = true">登录 </el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      
    >
      <span>   
          <el-button type="primary" round @click="x = !x">切换登录接口</el-button>
        <div v-if="!x">
          <p>用户登录</p>
          <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="用户名">
              <el-input name="uname" v-model="uname"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input name="upwd" v-model="upwd"></el-input>
            </el-form-item>
          </el-form>
            <el-button type="primary" round @click="login">登录</el-button>
        </div>

        <div v-else>
          <p>管理员登录</p>
          <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="用户名">
              <el-input name="uname" v-model="uname"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input name="upwd" v-model="upwd"></el-input>
            </el-form-item>
          </el-form>

         <el-button type="primary" round @click="viplogin">登录</el-button>
        </div></span
      >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      uname: "",
      upwd: "",
      x: false,
      dialogVisible: false,
    };
  },
  mounted() {
    this.login();
    this.viplogin();
  },
  methods: {
    login() {
      let params = `uname=${this.uname}&upwd=${this.upwd}`;
      this.axios
        .post("http://127.0.0.1:3000/v1/users/login", params)
        .then((res) => {
          // console.log(res);
          if (res.data.code == 200) {
            this.$store.commit('updateUname',this.uname)
            alert("登录成功正在为您跳转首页")
             this.$router.push("/");
          }
        });
    },
    viplogin() {
      let params = `uname=${this.uname}&upwd=${this.upwd}`;
      this.axios
        .post("http://127.0.0.1:3000/v1/vip/login", params)
        .then((res) => {
          // console.log(res);
           if (res.data.code == 200) {
             this.$store.commit('updateUname',this.uname)
            alert("登录成功正在为您跳转首页")
          this.$router.push("/");
          }
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style lang="scss" scoped>

</style>