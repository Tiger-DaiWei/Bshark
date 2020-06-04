<template>
  <div>
    <div id='myEcharts' style='height:400px'></div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Echart extends Vue {
  public $echarts: any;
  private options: object = {
    // 里面写要显示的echarts图标
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  private mounted() {
    const ele = document.getElementById('myEcharts');
    const chart: any = this.$echarts.init(ele);
    // 调接口获取数据
    chart.setOption(this.options);
  }
}
</script>

<style lang='less'>
</style>
