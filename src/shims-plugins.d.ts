import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    _: any
    $moment: any
    $utils: any
  }
}