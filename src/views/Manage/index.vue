<template>
  <div class="manage-index">
    <ColRowTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator';
import ColRowTable from '@/components/Table/ColRowTable';
@Component({
  components: {
    ColRowTable,
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
