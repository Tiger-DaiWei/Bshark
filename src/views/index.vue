<template>
  <div class="home">
    <h1>This is an home page</h1>
    <Lunbo/>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator';
import Lunbo from './../components/lunbo.vue';

@Component({
  components: {
    Lunbo,
  },
})
export default class Home extends Vue {
}
</script>
