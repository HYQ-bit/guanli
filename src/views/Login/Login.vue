<template>
  <div>
    <el-form
      :model="LoginForm"
      ref="loginForm"
      :rules="rules"
      class="Formcontainer"
    >
      <h3 class="loginTitle">系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          placeholder="请输入用户名"
          v-model="LoginForm.username"
          autocomplete="false"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="LoginForm.password"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          type="password"
          placeholder="点击图片切换验证码"
          v-model="LoginForm.code"
          style="width: 250px; margin-right: 5px"
        ></el-input>
        <img :src="captchaUrl" @click="updateCaptcha" />
      </el-form-item>
      <el-checkbox v-model="check" class="remember">记住我</el-checkbox>
      <el-button
        type="primary"
        size="default"
        style="width: 100%"
        @click="Submit"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  
  data() {
    return {
      captchaUrl: "/captcha?time="+new Date(), //更换不同的验证码，验证码刷新
      check: true,
      LoginForm: {
        username: "admin",
        password: "123",
        code: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    updateCaptcha(){
      this.captchaUrl = '/captcha?time='+new Date //无反应需要跨域，请求至nodejs中转发到
    },
    Submit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$message({
            message: "登陆成功",
            type: "success",
          });
        } else {
          this.$message.error("用户信息不完整！");
          return false;
        }
      });
    },

  },
};
</script>

<style>
.Formcontainer {
  width: 350px;
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  padding: 15px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle {
  margin: 0px auto 40px auto;
}
.remember {
  margin-bottom: 15px;
  text-align: left;
}
</style>
