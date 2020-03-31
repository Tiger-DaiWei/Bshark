<template>
  <div class="home">
    <h1>This is an home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {
}
</script>
