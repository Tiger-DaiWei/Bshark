<template>
  <div class="portal-index">
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
  margin-top: 50px;
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
