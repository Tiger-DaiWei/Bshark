<template>
  <div class="portal-index">
    这是官网
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Portal extends Vue {
  public mounted() {
    this.$utils.capitalize('ww');
  }
}
</script>

<style lang="less" scoped>
.portal-index {
  height: 100px;
}
</style>
