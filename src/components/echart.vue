<template>
  <div class="component-echart">
    趋势图
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class echart extends Vue {}
</script>

<style lang='less'>
.component-echart {
  color: red;
}
</style>
