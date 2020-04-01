import Vue from 'vue';

/**
 * @descript 函数作用
 * @param {String} string 参数类型
 * @return {String} 函数返回值
 */
export const capitalize = (str: string) => {
  return str;
};

const utils = {
  capitalize,
};

Vue.prototype.$utils = utils;

export default utils;
