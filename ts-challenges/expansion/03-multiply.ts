/**
 *  乘法  
 *  就是一个数 A 重复的加 B 次 
 *  B次我也不知道多少次，所以条件反射用到递归，需要用一个ResultArr存贮中间计算的结果
 *  记得 经历了一轮的加法后，B 要减一
 */
type Multiply<
  A extends number,
  B extends number,
  ResultArr extends unknown[] = []
  > = 
  B extends 0
    ? ResultArr['length']
    : Multiply<A, Subtract<B, 1>, [...BuildArr<A>, ...ResultArr]>

type example2 = Multiply<5, 10>