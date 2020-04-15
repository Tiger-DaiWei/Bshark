import Vue from 'vue';

/**
 * @descript 函数作用
 * @param {String} string 参数类型
 * @return {String} 函数返回值
 */
export const capitalize = (str: string) => {
  return str;
};

/**
 * @descript 函数作用
 * @param {any} any 参数类型
 * @return {number} 函数返回值
 */
export const getTotal = (dataArray: any[]) => {
  let isTotal: number = 0;
  if (dataArray.length) {
    dataArray.forEach((el) => {
      if (el.children.length) isTotal = isTotal + getTotal(el.children);
      else isTotal = isTotal + 1;
    });
    return isTotal;
  }
  return 1;
};

const utils = {
  capitalize,
  getTotal,
};

Vue.prototype.$utils = utils;

export default utils;
