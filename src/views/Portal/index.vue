<template>
  <div class="portal-index">
    这是官网
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Portal extends Vue {
  public someData!: string;
  public data(): any {
    return {
      someData: '',
    };
  }

  public mounted() {
    console.log(this.$utils.capitalize('ww'));
  }

}
</script>

<style lang="less" scoped>
.portal-index {
  height: 100px;
}
</style>
