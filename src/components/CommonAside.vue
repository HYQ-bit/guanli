<template>
  <aside>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen" 
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="iscollapse">
      <h3 style="overflow:hidden; color:#fff;">后台信息管理系统</h3>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
      </el-submenu> -->
        <!-- <el-menu-item-group>
          <template slot="title">导航</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      
      <el-menu-item index="1" @click="gethome">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2"  @click="clickMenu">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<script>
export default {
  data(){
    return {
      // iscollapse:false,
    }
  },
  computed:{
    iscollapse(){
      return this.$store.state.isCollapse
    }
  },
  methods: {
    gethome(){
      this.$router.push({name:'home'})
    },
    clickMenu(){
      this.$router.push({ name:'Register'});
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
  },
};
</script>

<style lang="scss" scoped>
aside{
  height: 100%;
  justify-content: space-around;
}
.el-menu {
  height: 100%;
  border: none;
}
h3{
  padding:5px 20px;
}
.el-menu-vertical-demo{
  height: 100%;
  width:100px;
  border:0px;
}
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
