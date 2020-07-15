<template>
  <div>
    <div id='myEcharts' style='height:400px;width: 100%;'></div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Mixins, Vue } from 'vue-property-decorator';
import EchartMixins from '../mixins/echart';

@Component({
  components: {},
})

export default class Echart extends Mixins(EchartMixins) {
  public $echarts: any;

  private mounted() {
    const ele = document.getElementById('myEcharts');
    const chart: any = this.$echarts.init(ele);
    // 调接口获取数据
    chart.setOption(this.echartsData);
  }
}
</script>

<style lang='less'>
#myEcharts {
  canvas {
    width: 100%;
  }
}
</style>
