<template>
  <div class="register">
    <el-button type="text" @click="dialogVisible = true">注册</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>
         <el-button type="primary" round @click="x = !x">切换注册接口</el-button>
        <div v-if="!x">
          <p>用户注册</p>

                <el-form :label-position="labelPosition" label-width="80px" >
      <el-form-item label="用户名">
    <el-input name="uname" v-model="uname"></el-input>
      </el-form-item>
    <el-form-item label="密码">
     <el-input name="upwd" v-model="upwd"></el-input>
   </el-form-item>
    <el-form-item label="邮箱">
     <el-input name="email" v-model="email"></el-input>
   </el-form-item>
    <el-form-item label="电话">
     <el-input name="phone" v-model="phone"></el-input>
   </el-form-item>
       </el-form>
        <el-button type="primary" round @click="register">注册</el-button>
        </div>

        <div v-else>
          <p>管理员注册</p>
          <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="用户名">
              <el-input name="uname" v-model="uname"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input name="upwd" v-model="upwd"></el-input>
            </el-form-item>
          </el-form>
            <el-button type="primary" round @click="vipregister">注册</el-button>
        </div>
      </span>
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
      phone: "",
      email: "",
      x: false,
      dialogVisible: false,
    };
  },
  mounted() {
    this.register();
    this.vipregister();
  },
  methods: {
    register() {
      let params = `uname=${this.uname}&upwd=${this.upwd}&email=${this.email}&phone=${this.phone}`;
      this.axios
        .post("http://127.0.0.1:3000/v1/users/reg", params)
        .then((res) => {
          // console.log(res);
           if (res.data.code == 200) {
            document.location.href = "http://localhost:8080/";
          }
        });
    },
    vipregister() {
      let params = `uname=${this.uname}&upwd=${this.upwd}`;
      this.axios
        .post("http://127.0.0.1:3000/v1/vip/reg", params)
        .then((res) => {
          // console.log(res);
           if (res.data.code == 200) {
            document.location.href = "http://localhost:8080/";
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