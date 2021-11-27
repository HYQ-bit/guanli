<template>
  <div class="container">
    <div class="formbox">
      <el-form label-position="left" label-width="80px" :model="formlist" action.prevent="">
        <el-form-item label="日期">
          <el-input v-model="formlist.date"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formlist.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="formlist.address"></el-input>
        </el-form-item>
        <el-button type="submit" style="margin-top:50px" @click="posttext">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      formlist: {
        date: "",
        name: "",
        address: "",
      },
    };
  },
  methods: {
    posttext() {
      this.$store.commit('sent',this.formlist)
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 800px;
  height: 500px;
  position: relative;
  margin: 60px auto;
  box-shadow: 2px;
  box-shadow: 0 0 25px #cac6c6 ;
}
.formbox{
  // border: 1px solid blue;
  width: 500px;
  padding: 30px;
  height: 100%;
  margin-top: 20px;
  align-items: center;
}
.el-form{
  margin: 20px;
  height: 100%;
}
</style>
