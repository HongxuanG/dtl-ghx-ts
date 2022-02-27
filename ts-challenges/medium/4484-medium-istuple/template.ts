type NotEqual<A, B> =
  (<T>() => T extends A ? true : false) extends (<T>() => T extends B ? true : false)
    ? false
    : true

type IsTuple<T> = 
  T extends readonly [...params: infer Type]
    ? NotEqual<Type['length'], number>
    : false
    

/**
 * 判断是否元组的唯一条件：
 * 获取的长度的值始终是 数字字面量
 * 而普通数组只是 number
 * 
 * equal 的高级类型的诡异实现涉及到TS的源码
 */