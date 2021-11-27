<template>
  <header>
    <div class="lcontainer">
      <el-button type="primary" icon="el-icon-menu" size="normal" @click="change"></el-button>
      <span>首页</span>
    </div>
    <div class="rcontainer">
      <a class="admit" @click="toAdmit">登录</a>
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      usertext: {
        date: "",
        name: "",
        province: "",
        city: "",
        address: "",
        zip: "",
        update: "",
      },
    };
  },
  methods: {
    addtext() {
      
    },
    change(){
      this.$store.commit('changestate');
    },
    toAdmit(){
      this.$router.push({name:'Login'})
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(51, 51, 51);
  color: #fff;
}
.rcontainer {
  margin-right: 30px;
}
.lcontainer {
  margin-left: 10px;
}
.lcontainer span {
  display: inline-block;
  margin-left: 15px;
}
.admit:hover {
  color: rgb(102,177,255);
  cursor: pointer;
}
</style>
