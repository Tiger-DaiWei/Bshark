<template>
  <div
    class="image-map">
    <div
      class="image-tree"
      v-for="(item, index) in showObj"
      :key="index">
      <div>
      <div class="image-card">
        <dl :class="[item.styleList]">
          <dt>
            {{ item.title }}
          </dt>
          <dd>
            <p v-for="(item1, index) in item.list"
            :key="index">
              {{ item1 }}
            </p>
          </dd>
        </dl>
      </div>
      <div
        class="card-item-child"
        v-if="item.children.length"
        :style="{ height: `${numberTotal ? numberTotal * 110 : 110 }px`}">
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
  public data(): any {
    return {
    };
  }
  get numberTotal() {
    let isNumber: number = 0;
    this.showObj.forEach((el) => {
      if (el.children.length) isNumber = isNumber + el.children.length;
      else isNumber = isNumber + 1;
    });
    return isNumber;
  }
}
</script>

<style lang="less" scoped>
.image-map {
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  .image-tree {
    width: 222px;
    position: relative;
    .image-card {
      padding: 5px 0;
      // position: absolute;
      // top: 50%;
      // left: 0px;
      // transform: translateY(-50%);
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
    }
    .card-item-child {
      width: 222px;
      position: absolute;
      top: 50%;
      left: 280px;
      transform: translateY(-50%);
    }
  }
}
</style>
