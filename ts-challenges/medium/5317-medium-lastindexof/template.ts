type LastIndexOf<
  T extends unknown[],
  U extends number
  > =
  IndexOf<Reverse<T>, U> extends -1
    ? -1
    : Subtract<T['length'], [BuildArr<IndexOf<Reverse<T>, U>>, unknown]['length']> 


// 思路：
/**
 * 利用已经实现的IndexOf Reverse  Subtract  BuildArr
 * 1、利用 Reverse 翻转数组T
 * 2、利用 IndexOf 找到 U的索引值 
 * 3、利用 Subtract 减法   T数组长度 - (索引值+1) 就得到了LastIndexOf的索引值
 * 4、需要处理 没有找到返回-1的情况   IndexOf未找到就已经返回-1了，所以一开始吸纳判断IndexOf是否返回-1，是则返回-1 否则执行减法逻辑
 */