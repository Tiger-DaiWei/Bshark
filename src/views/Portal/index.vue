<template>
  <div class="portal-index">
    这是
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import echart from '@/components/echart.vue';
import imageMap from '@/components/imageMap.vue';

@Component({
  components: {
    echart,
    imageMap,
  },
})
export default class Portal extends Vue {
  public data(): any {
    return {};
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
}
</script>

<style lang="less" scoped>
.portal-index {}
</style>
