<template>
  <div class="portal-index">
  <el-table
    :data="tableData"
    height="360"
    style="width: 100%">
    <el-table-column
      prop="data1"
      label="预警纬度"
      width="100">
    </el-table-column>
    <el-table-column
      prop="data2"
      label="规则集"
      width="100">
      <template slot-scope="scope">
        <el-checkbox>{{ scope.row.data2 }}</el-checkbox>
      </template>
    </el-table-column>
    <el-table-column
      prop="data3"
      label="问题描述">
      <template slot-scope="scope">
        <el-input v-model="scope.row.data3" placeholder="请输入内容"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="data4"
      label="预警时间">
      <template slot-scope="scope">
        <el-select v-model="scope.row.data4" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <i
          class="el-icon-circle-plus-outline btn-class"
          @click="add(scope.row)"></i>
        <i
          class="el-icon-circle-close btn-class"
          @click="del(scope.$index, tableData)"></i>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Portal extends Vue {
  public someData!: any[];
  public showObj!: any[];
  public numberTotal!: number;
  public descriptList!: any[];
  public tableData!: any[];
  public options!: any[];
  public data(): any {
    return {
      tableData: [{
        data1: '整体',
        data2: '规则',
        data3: '当月企划',
        data4: '全月',
      }],
      options: [
        {
          value: 'A01',
          label: '全日',
        },
        {
          value: 'A03',
          label: '全月',
        },
      ],
    };
  }

  public beforeCreate() {
    // console.log('beforeCreate');
    // console.log(this.$el);
    // console.log(this.$data);
  }

  public created() {
    // console.log('created');
    // console.log(this.$el);
    // console.log(this.$data);
  }

  public beforeMount() {
    // console.log('beforeMount');
    // console.log(this.$el);
    // console.log(this.$data);
  }

  public mounted() {
    // console.log(this.numberTotal);
    // console.log(this.$el);
    // console.log(this.$data);
  }

  public method() {
    // console.log('mothod');
    // console.log(this.$el);
    // console.log(this.$data);
  }

  public beforeUpdate() {
    // console.log('beforeUpdate');
    // console.log(this.$el);
    // console.log(this.$data);
  }

  public updated() {
    // console.log('update');
    // console.log(this.$el);
    // console.log(this.$data);
  }

  public beforeDestroy() {
    // console.log('beforeDestory');
    // console.log(this.$el); // el元素的挂载节点
    // console.log(this.$data); // data属性
  }

  public destroyed() {
    // console.log('destroyed');
    // console.log(this.$el);
    // console.log(this.$data);
  }

  // 将多维数组转为一维数组
  public isOneArray(arr: any[]) {
    let newArray: any[] = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        newArray = newArray.concat(this.isOneArray(item));
      } else {
        newArray.push(item);
      }
    });
    return newArray;
  }

  public add(obj: object) {
    this.tableData.push(obj);
  }

  public del(num: number, arrs: any[]) {
    arrs.splice(num, 1);
  }

}
</script>

<style lang="less" scoped>
.portal-index {
  i.btn-class {
    font-size: 20px;
  }
}
</style>
