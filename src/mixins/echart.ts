import { Component, Vue } from 'vue-property-decorator';

interface EchartsData {
  title: object; // 标题组件，包含主标题和副标题
  legend: object; // 图例组件
  xAxis: object;
  yAxis: object;
  series: any[];
}

@Component
class EchartMixins extends Vue {
  public echartsData!: EchartsData;

  public data() {
    return {
      echartsData: {
        title: {
          show: true,
          text: '趋势图测试',
          textAlign: 'center',
        },
        legend: {},
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
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'bar',
          },
        ],
      },
    };
  }
}

export default EchartMixins;
