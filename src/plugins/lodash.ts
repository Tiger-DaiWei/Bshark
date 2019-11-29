import Vue from 'vue';
import cloneDeep from 'lodash/cloneDeep';
import uniq from 'lodash/uniq';

Vue.prototype._ = {
  cloneDeep,
  uniq,
};
