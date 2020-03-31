<template>
  <div class="mall-index">
    这是商场首页
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Mall extends Vue {

}
</script>

<style lang="less" scoped>
.mall-index {
  height: 100px;
}
</style>
