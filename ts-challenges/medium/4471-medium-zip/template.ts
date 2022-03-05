type Zip<
  T extends any[] = [],
  U extends any[] = [],
  countArr extends unknown[] = [], // 循环次数+1
  ResultArr extends unknown[] = [] // 储存中间结果
> = countArr['length'] extends T['length'] | U['length']
  ? ResultArr
  : Zip<
      T,
      U,
      [...countArr, unknown],
      [...ResultArr, [T[countArr['length']], U[countArr['length']]]]
    >

/**
 * 终止递归的条件：
 * 循环次数等于T Tuple的长度或者等于U Tuple的长度
 * 还需要一个可以存储中间结果的数组
 */
