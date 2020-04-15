<template>
  <div
    class="image-map"
    :style="{height: `${numberTotal * 104}px`}">
    <!-- 卡片树 -->
    <div class="image-tree">
      <!-- 卡片集合 -->
      <div
        class="tree-item"
        v-for="(item, index) in showObj"
        :key="index"
        :style="{height: `${getTotal(item.children) * 104}px`}">
        <!-- 竖线 注：该卡片的数量集合大于1才有竖线显示-->
        <div
          class="line"
          v-if="showObj.length > 1"
          :style="{
            top: (index === showObj.length - 1 ? 0 : 'auto'),
            bottom: ((index < showObj.length - 1 ? 0 : 'auto')),
            height: ((0 < index && index <showObj.length - 1) ? '100%' : '50%')
          }"></div>
        <!-- 具体卡片展示 -->
        <div
          class="image-card"
          :class="{lineRowCol: item.children.length}">
          <dl :class="[item.styleList]">
            <dt>
              {{ item.title }}
            </dt>
            <dd>
              <p
                v-for="(item1, index) in item.list"
                :key="index">
                {{ item1 }}
              </p>
            </dd>
          </dl>
        </div>
        <!-- 如果存在子节点则在渲染该组件 -->
        <div
          class="card-item-child"
          v-if="item.children.length">
          <ImageMap
            :showObj="item.children"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ImageMap,
  },
})
export default class ImageMap extends Vue {
  @Prop() public showObj!: any[];
  public numberTotal!: number;
  public data(): any {
    return {
      numberTotal: 0,
    };
  }
  public mounted() {
    this.numberTotal = this.$utils.getTotal(this.showObj);
  }
  public getTotal(dataArray: any[]) {
    return this.$utils.getTotal(dataArray);
  }
}
</script>

<style lang="less" scoped>
.image-map {
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  width: 222px;
  .image-tree {
    width: 222px;
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    .tree-item {
      position: relative;
      .line {
        width: 1px;
        background: #d5d5d5;
        height: 50%;
        position: absolute;
        left: -30px;
        bottom: 0px;
      }
      .image-card {
        padding: 5px 0;
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        dl {
          border: 1px solid #FFADAD;
          height: 92px;
          width: 220px;
          border-radius: 4px;
          background-color: #fff;
          font-size: 14px;
          dt {
            color: #333;
            font-weight: 700;
            line-height: 20px;
            padding: 6px 0 6px 12px;
            border-bottom: 1px solid #FFADAD;
            background-color: #FFF1F1;
            border-radius: 4px 4px 0px 0px;
          }
          dd {
            padding: 6px 12px;
            p {
              line-height: 24px;
              color: #666;
            }
          }
        }
        dl.color1 {
          border-color: #FFADAD;
          dt {
            border-bottom-color: #FFADAD;
            background-color: #FFF1F1;
          }
        }
        dl.color2 {
          border-color: #A3E8D1;
          dt {
            border-bottom-color: #A3E8D1;
            background-color: #ECFFF8;
          }
        }
        &:before {
          display: block;
          content: '';
          width: 30px;
          height: 1px;
          background: #d5d5d5;
          position: absolute;
          top: 50%;
          left: -30px;
          transform: translateY(-50%);
        }
      }
      .lineRowCol {
        &:after {
          display: block;
          content: '';
          width: 30px;
          height: 1px;
          background: #d5d5d5;
          position: absolute;
          top: 50%;
          right: -30px;
          transform: translateY(-50%);
        }
      }
      .card-item-child {
        width: 222px;
        position: absolute;
        top: 50%;
        left: 282px;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
