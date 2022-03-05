// 数组扁平化
type Flatten<T> = T extends []
  ? []
  : T extends [infer A, ...infer B]
  ? A extends any[]
    ? Flatten<[...A, ...B]>
    : [A, ...Flatten<B>]
  : T

/**
 * 解构展开 T   [infer A, ...infer B]
 *  T 是不是 数组
 *        进一步判断 A 是不是 数组
 *          是数组
 *             调用自身
 *          不是数组
 *             A放入数组，后续的元素作为参数继续调用自身
 *    不是数组 返回 T
 */
type sss = Flatten<[1, 2, [3, 4], [[[5]]]]>

function myFlatten(arr: []) {
  let res: any[] = []
  arr.map((item) => {
    if (Array.isArray(item)) {
      res = res.concat(myFlatten(item))
    } else {
      res.push(item)
    }
  })
  return res
}
