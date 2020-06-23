<template>
  <div class="manage-index">
    这是管理后台
    <vddl/>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Manage extends Vue {

}
</script>

<style lang="less" scoped>
.manage-index {
  height: 100px;
}
</style>
