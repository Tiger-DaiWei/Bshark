<template>
  <div class="project-index">
    <div class="showitemRouter">
      <router-link
        v-for='item in routerName'
        :key='item.key'
        :to="item.key">
        {{ item.name }}
        </router-link>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  public routerName!: any[];

  public data() {
    return {
      routerName: [
        { name: '官网', key: 'portal'},
        { name: '商场', key: 'mall'},
        { name: '后台管理系统', key: 'manage'},
      ],
    };
  }
}
</script>

<style lang="less" scoped>
.project-index {
  height: 100px;
  margin: 0 auto;
}
</style>
