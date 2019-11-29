import { Component, Vue } from 'vue-property-decorator';

interface Pager {
  currentPage: number;
  pageSize: number;
  pageTotal: number;
  total: number;
}

@Component
class Pagination extends Vue {
  public pager!: Pager;

  public data() {
    return {
      pager: {
        currentPage: 1,
        pageSize: 10,
        pageTotal: 0,
        total: 0,
      },
    };
  }

  public pageChange(val: number): void {
    this.pager.currentPage = val;
    this.$nextTick(() => {
      (this as any).fetch();
    });
  }
}

export default Pagination;
