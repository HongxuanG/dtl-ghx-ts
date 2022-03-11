// 嵌套的数组类型展开转成union类型，组成一个元素是union的数组
type convertUnionArray<T extends unknown[], ResultArr extends unknown[] = []> =
  T extends [infer First, ...infer Rest]
    ? First extends unknown[]
      ? convertUnionArray<Rest, [...ResultArr, First[number]]>
    : convertUnionArray<Rest, [...ResultArr, First]>
  : ResultArr

  // 交叉类型
type Intersection<T extends any[], Union = convertUnionArray<T>[0]> = 
  convertUnionArray<T> extends [infer First, ...infer Rest]
    ? Intersection<Rest, Extract<First, Union>>
    : Union

/**
 * 总结：
 * 1、& 交叉类型的一部分作用还没有熟悉
 * 2、逻辑上还没想清楚就写代码，结果写不出来，越写越烦躁
 */
