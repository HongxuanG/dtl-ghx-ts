type Unique<T extends unknown[]> = T extends [...infer Rest, infer Last]
  ? Last extends Rest[number]
    ? Unique<Rest>
    : [...Unique<Rest>, Last]
  : T

/**
 * 思路
 * 拆分数组  Last 和 Rest
 * 判断最后一个Last是否 extends  Rest的Union类型
 * 是 说明有重复的  继续递归Rest 跳过该Last，不归纳到结果中
 * 否 说明是唯一的  归纳到结果中，继续递归剩下的Rest部分
 */
