<template>
  <div class="portal-index">
    <ol>
      <li>预警纬度</li>
      <li>规则集</li>
      <li>问题描述</li>
      <li>指标</li>
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
            v-for="(item1, index) in item.children"
            :key="index"
            class="second-1">
            <div>{{ item1.rule }}</div>
            <div>{{ item1.des }}</div>
            <!-- 第三层 -->
            <div class="third">
              <div
                v-for="(item2, index) in item1.children"
                :key="index">
                {{ item2.name }}
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
export default class Portal extends Vue {
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
              children: [
                {
                  name: '指标1',
                },
                {
                  name: '指标2',
                },
              ],
            },
            {
              rule: '2',
              des: '描述2',
              length: 2,
              children: [
                {
                  name: '指标1',
                },
                {
                  name: '指标2',
                },
              ],
            },
            {
              rule: '3',
              des: '描述3',
              length: 2,
              children: [
                {
                  name: '指标31',
                },
                {
                  name: '指标32',
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
              children: [
                {
                  name: '指标1',
                },
                {
                  name: '指标2',
                },
              ],
            },
            {
              rule: '2',
              des: '描述2',
              length: 2,
              children: [
                {
                  name: '指标1',
                },
                {
                  name: '指标2',
                },
              ],
            },
            {
              rule: '3',
              des: '描述3',
              length: 2,
              children: [
                {
                  name: '指标31',
                },
                {
                  name: '指标32',
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
  ol {
    width: 400px;
    border: 1px solid #ccc;
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
      width: 400px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      margin-top: -1px;
      div.first {
        flex: 1;
      }
      div.second {
        flex: 3;
        border-left: 1px solid #ccc;
        .second-1 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          > div {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .third {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-left: 1px solid #ccc;
            > div {
              height: 50px;
              line-height: 50px;
            }
          }
        }
      }
      div {
        text-align: center;
      }
    }
  }
}
</style>
