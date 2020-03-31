<template>
  <div class="portal-index">
    这是官网
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Portal extends Vue {

}
</script>

<style lang="less" scoped>
.portal-index {
  height: 100px;
}
</style>
