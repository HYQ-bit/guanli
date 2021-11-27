<template>
  <el-container class="container">
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header class="head">
        <common-header></common-header>
      </el-header>
      <el-main class="main"><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/ComminHeader.vue'

export default {
  name: "Main",
  components: {
    CommonAside,
    CommonHeader,
  },
};
</script>
<style lang="scss" scoped>
  .container{
    height: 100%;
    flex-grow: 1;
  }
  el-aside{
    height: 100vh;
  }
.head{
  padding: 0px 0px;
}
.main{
  padding: 0px 0px;
  width: 100%;
  height: 100%;
}
</style>
