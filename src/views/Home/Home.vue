<template>
  <div>
    <div>
      <el-input
        class="addinput"
        placeholder="输入信息"
        size="small"
        suffix-icon="el-icon-plus"
        v-model="input1"
      ></el-input>
      <el-button
        icon="el-icon-plus"
        type="primary"
        size="small"
        @click="dialogVisible = true"
        >添加</el-button
      >
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="请输入信息..."
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <el-form
        :label-position="left"
        label-width="100px"
        :model="addtxt"
        width="200px"
      >
        <el-form-item label="日期">
          <el-input v-model="addtxt.date"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="addtxt.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="addtxt.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addtolist">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      addtxt: {
        date: "",
        name: "",
        address: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    deleteRow(index){
      this.tableData[index].remove()
    },
    addtolist() {
      if (
        (this.addtxt.date === "") |
        (this.addtxt.name === "") |
        (this.addtxt.address === "")
      ) {
        alert("请输入完整信息");
      } else {
        this.dialogVisible = false;
        this.tableData.push(this.addtxt);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.addinput {
  width: 300px;
  margin-left: 20px;
  margin-top: 10px;
  margin-right: 8px;
}
.el-form {
  width: 600px;
}
</style>
