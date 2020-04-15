<template>
  <div class="portal-index">
    <ul
      class="content-detail"
      v-show="changeShow">
      <li
        v-for="(item, index) in descriptList"
        :key="index">
        <dl>
          <dt>
            {{ item.dt }}
          </dt>
          <dd>
            <p
              v-for="(item1, index) in item.dds"
              :key="index">
              {{ item.dds.length > 1 ? index + 1 + '.' : '' }}{{ item1 }}
            </p>
          </dd>
        </dl>
      </li>
    </ul>
    <div
      class="changeShow"
      @click="changeShow = !changeShow">
      <i :class="changeShow ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
    </div>
    <div class="content-suggest">
      <h4>策略建议:</h4>
      <p>重点关注家用新车工作日平台异常</p>
    </div>
    <div class="content">
      <div
        class="image-position"
        :style="{height: `${numberTotal * 104}px`}">
        <ImageMap :showObj="showObj"/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import ImageMap from '@/components/imageMap.vue';

@Component({
  components: {
    ImageMap,
  },
})
export default class Portal extends Vue {
  public someData!: any[];
  public showObj!: any[];
  public numberTotal!: number;
  public descriptList!: any[];
  public data(): any {
    return {
      someData: [1, [2, 3], [4, [5, 6], 7], 8],
      showObj: [{
        title: '新车较市场',
        list: ['增速：10.2%', '较市场：-0.8pt'],
        styleList: 'color1',
        children: [
          {
            title: '家用新车较市场',
            list: ['增速：10.2%', '较市场：-0.8pt'],
            styleList: 'color1',
            children: [
              {
                title: '家用新4s较市场',
                list: ['增速：10.2%', '较市场：-0.8pt'],
                styleList: 'color1',
                children: [
                  {
                    title: '家用新4s费用环比滚动3个月',
                    list: ['增速：10.2%', '较市场：-0.8pt'],
                    styleList: 'color1',
                    children: [
                    ],
                  },
                  {
                    title: '家用新4s费用环比家用续',
                    list: ['增速：10.2%', '较市场：-0.8pt'],
                    styleList: 'color2',
                    children: [
                    ],
                  },
                ],
              },
              {
                title: '家用新非4s较市场',
                list: ['增速：10.2%', '较市场：-0.8pt'],
                styleList: 'color1',
                children: [
                  {
                    title: '家用新非4s费用环比滚动3个月',
                    list: ['增速：10.2%', '较市场：-0.8pt'],
                    styleList: 'color2',
                    children: [
                    ],
                  },
                  {
                    title: '家用新4s费用环比家用续',
                    list: ['增速：10.2%', '较市场：-0.8pt'],
                    styleList: 'color2',
                    children: [
                    ],
                  },
                  {
                    title: '家用新4s费用环比家用续',
                    list: ['增速：10.2%', '较市场：-0.8pt'],
                    styleList: 'color2',
                    children: [
                  {
                    title: '家用新4s费用环比家用续',
                    list: ['增速：10.2%', '较市场：-0.8pt'],
                    styleList: 'color2',
                    children: [
                    ],
                  },
                  {
                    title: '家用新4s费用环比家用续',
                    list: ['增速：10.2%', '较市场：-0.8pt'],
                    styleList: 'color2',
                    children: [
                    ],
                  },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: '商用新车',
            list: ['增速：10.2%', '较市场：-0.8pt'],
            styleList: 'color2',
            children: [
              {
                title: '商用新车',
                list: ['增速：10.2%', '较市场：-0.8pt'],
                styleList: 'color2',
                children: [

              {
                title: '商用新车',
                list: ['增速：10.2%', '较市场：-0.8pt'],
                styleList: 'color2',
                children: [],
              },
                ],
              },
              {
                title: '商用新车',
                list: ['增速：10.2%', '较市场：-0.8pt'],
                styleList: 'color2',
                children: [],
              },
            ],
          },
          {
            title: '商用新车1',
            list: ['增速：10.2%', '较市场：-0.8pt'],
            styleList: 'color2',
            children: [],
          },
          {
            title: '商用新车2',
            list: ['增速：10.2%', '较市场：-0.8pt'],
            styleList: 'color2',
            children: [],
          },
        ],
      }],
      numberTotal: 0,
      descriptList: [
        {
          dt: '问题',
          dds: [
            '预估全月落后市场',
          ],
        },
        {
          dt: '原因',
          dds: [
            '预估全月落后市场',
            '预估全月落后市场',
            '预估全月落后市场',
          ],
        },
        {
          dt: '举措',
          dds: [
            '预估全月落后市场',
            '预估全月落后市场',
            '预估全月落后市场',
          ],
        },
        {
          dt: '目标',
          dds: [
            '预估全月落后市场',
            '预估全月落后市场',
            '预估全月落后市场',
          ],
        },
        {
          dt: '责任人',
          dds: [
            '预估全月落后市场',
            '预估全月落后市场',
            '预估全月落后市场',
          ],
        },
        {
          dt: '时间',
          dds: [
            '预估全月落后市场',
            '预估全月落后市场',
            '预估全月落预估预估全月落后市场预估全月落后市场全月落后市场后市场',
          ],
        },
      ],
      changeShow: true,
    };
  }

  public beforeCreate() {
    console.log('beforeCreate');
    console.log(this.$el);
    console.log(this.$data);
  }

  public created() {
    console.log('created');
    console.log(this.$el);
    console.log(this.$data);
  }

  public beforeMount() {
    console.log('beforeMount');
    console.log(this.$el);
    console.log(this.$data);
  }

  public mounted() {
    this.numberTotal = this.$utils.getTotal(this.showObj);
    console.log(this.numberTotal);
    console.log(this.$el);
    console.log(this.$data);
  }

  public method() {
    console.log('mothod');
    console.log(this.$el);
    console.log(this.$data);
  }

  public beforeUpdate() {
    console.log('beforeUpdate');
    console.log(this.$el);
    console.log(this.$data);
  }

  public updated() {
    console.log('update');
    console.log(this.$el);
    console.log(this.$data);
  }

  public beforeDestroy() {
    console.log('beforeDestory');
    console.log(this.$el); // el元素的挂载节点
    console.log(this.$data); // data属性
  }

  public destroyed() {
    console.log('destroyed');
    console.log(this.$el);
    console.log(this.$data);
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
}
</script>

<style lang="less" scoped>
.portal-index {
  padding: 50px;
  // 列表描述问题
  .content-detail {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    border: 1px solid #e8e8e8;
    li {
      flex: 1;
      border-left: 1px solid #e8e8e8;
      margin-left: -1px;
      color: #333;
      dl {
        height: 100%;
        dt {
          background: #F6F6F6;
          line-height: 24px;
          padding: 8px 20px;
          font-size: 16px;
          font-weight: 700;
        }
        dd {
          padding: 20px;
          height: calc(~'100% - 80px');
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            line-height: 24px;
            font-size: 14px;
          }
        }
      }
    }
  }
  // 展开收起
  .changeShow {
    color: #4D7AFF;
    width: 14px;
    height: 12px;
    margin: 0 auto;
    padding: 10px;
    cursor: pointer;
    i {
      width: 14px;
      font-weight: 700;
    }
  }
  // 策略建议
  .content-suggest {
    border-radius: 4px;
    border: 1px solid #e8e8e8;
    height: 52px;
    color: #333;
    padding: 13px 30px;
    box-sizing: border-box;
    h4, p {
      line-height: 24px;
      height: 24px;
      display: inline-block;
    }
    h4 {
      font-size: 16px;
      font-weight: 700;
      margin-right: 8px;
      position: relative;
      &:after {
        display: block;
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #999;
        position: absolute;
        left: -11px;
        top: 10px;
      }
    }
  }
  // 图谱样式
  .content {
    width: 1100px;
    margin: 0 auto;
    border: 1px solid green;
    padding: 20px;
    div.image-position {
      overflow: auto;
      position: relative;
    }
  }
}
</style>
