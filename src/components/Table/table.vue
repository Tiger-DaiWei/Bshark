<template>
  <div class="table-style1">
    <ol>
      <li>预警纬度</li>
      <li>规则集</li>
      <li>问题描述</li>
      <li>预警时间</li>
      <li>预警指标</li>
      <li>指标代号</li>
      <li>符号选择</li>
      <li>数值设置</li>
      <li>操作</li>
    </ol>
    <ul>
      <li
        v-for="(item, index) in tableData"
        :key="index">
        <!-- 第一分层 -->
        <div class="first">{{ item.plate }}</div>
        <div class="second">
          <!-- 第二分层 -->
          <div
            v-for="(item1, index1) in item.children"
            :key="index1"
            class="second-1">
            <div>{{ item1.rule }}</div>
            <div>{{ item1.des }}</div>
            <div>
              {{ item1.time }}
              <i
                class="el-icon-circle-plus-outline"
                @click="addRule(index)"></i>
              <i
                class="el-icon-circle-close"
                @click="removeRule(index, index1)"></i>
            </div>
            <!-- 第三层 -->
            <div class="third">
              <div
                v-for="(item2, index2) in item1.children"
                :key="index2"
                class="third-1">
                <div>{{ item2.title }}</div>
                <div>{{ item2.number }}</div>
                <div>{{ item2.select }}</div>
                <div>{{ item2.set }}</div>
                <div>
                  <i
                    class="el-icon-circle-plus-outline"
                    @click="addIndicators(index, index1)"></i>
                  <i
                    class="el-icon-circle-close"
                    @click="delIndicators(index, index1, index2)"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Table extends Vue {
  public someData!: any[];
  public showObj!: any[];
  public numberTotal!: number;
  public descriptList!: any[];
  public tableData!: any[];
  public options!: any[];
  public data(): any {
    return {
      tableData: [
        {
          plate: '整体',
          length: 6,
          children: [
            {
              rule: '1',
              des: '描述1',
              length: 2,
              time: '时间',
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
            {
              rule: '2',
              des: '描述2',
              length: 2,
              time: '时间',
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
            {
              rule: '3',
              des: '描述3',
              length: 2,
              time: '时间',
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
          ],
        },
        {
          plate: '续保',
          length: 6,
          children: [
            {
              rule: '1',
              des: '描述1',
              length: 2,
              time: '时间',
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
            {
              rule: '2',
              des: '描述2',
              time: '时间',
              length: 2,
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
            {
              rule: '3',
              des: '描述3',
              time: '时间',
              length: 2,
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
          ],
        },
        {
          plate: '新车',
          length: 6,
          children: [
            {
              rule: '1',
              des: '描述1',
              length: 2,
              time: '时间',
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
            {
              rule: '2',
              des: '描述2',
              time: '时间',
              length: 2,
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
            {
              rule: '3',
              des: '描述3',
              time: '时间',
              length: 2,
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
          ],
        },
        {
          plate: '费用',
          length: 6,
          children: [
            {
              rule: '1',
              des: '描述1',
              length: 2,
              time: '时间',
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
            {
              rule: '2',
              des: '描述2',
              time: '时间',
              length: 2,
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
            {
              rule: '3',
              des: '描述3',
              time: '时间',
              length: 2,
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
          ],
        },
        {
          plate: '转保',
          length: 6,
          children: [
            {
              rule: '1',
              des: '描述1',
              length: 2,
              time: '时间',
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
            {
              rule: '2',
              des: '描述2',
              time: '时间',
              length: 2,
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
            {
              rule: '3',
              des: '描述3',
              time: '时间',
              length: 2,
              children: [
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
                {
                  title: '预警指标',
                  number: '预警代号',
                  select: '符号选择',
                  set: '数值设置',
                  operate: '操作',
                },
              ],
            },
          ],
        },
      ],
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
  }

  public created() {
  }

  public beforeMount() {
  }

  public mounted() {
  }

  public method() {
  }

  public beforeUpdate() {
  }

  public updated() {
  }

  public beforeDestroy() {
  }

  public destroyed() {
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

  public addRule(number1: number) {
    this.tableData[number1].children.push(
      {
        rule: '1',
        des: '描述1',
        length: 2,
        time: '时间',
        children: [
          {
            title: '预警指标',
            number: '预警代号',
            select: '符号选择',
            set: '数值设置',
            operate: '操作',
          },
        ],
      });
  }

  public removeRule(num: number, num1: number) {
    if (this.tableData[num].children.length > 1) {
      this.tableData[num].children.splice(num1, 1);
    } else {
      this.$message({
        message: '一个板块最少保留一条数据',
        type: 'warning',
      });
    }
  }

  public addIndicators(num: number, num1: number) {
    console.log(num, num1);
    this.tableData[num].children[num1].children.push(
      {
        title: '预警指标',
        number: '预警代号',
        select: '符号选择',
        set: '数值设置',
        operate: '操作',
      });
  }

  public delIndicators(num: number, num1: number, num2: number) {
    if (this.tableData[num].children[num1].children.length > 1) {
      this.tableData[num].children[num1].children.splice(num2, 1);
    } else if (this.tableData[num].children.length > 1) {
      this.tableData[num].children.splice(num1, 1);
    } else {
      this.$message({
        message: '一个板块最少保留一条数据',
        type: 'warning',
      });
    }
  }
}
</script>



<style lang="less" scoped>
.table-style1 {
  margin: 50px;
  ol {
    width: 900px;
    background: #F6F6F6;
    border: 1px solid #e8e8e8;
    li {
      width: 100px;
      display: inline-block;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
  ul {
    li {
      width: 900px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border: 1px solid #e8e8e8;
      margin-top: -1px;
      div.first {
        flex: 1;
      }
      div.second {
        flex: 8;
        border-left: 1px solid #e8e8e8;
        .second-1 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border-bottom: 1px dashed #e8e8e8;
          > div {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .third {
            flex: 5;
            display: flex;
            flex-direction: column;
            border-left: 1px solid #e8e8e8;
            .third-1 {
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              div {
                flex: 1;
                height: 50px;
                line-height: 50px;
              }
            }
          }
        }
        .second-1:last-child {
          border: none;
        }
      }
      div {
        text-align: center;
        i {
          padding: 0 6px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
