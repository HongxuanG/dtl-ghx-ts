type AnyOf<T extends readonly any[]> = T[number] extends '' | 0 | false | [] | Record<string, never> ? false : true

// 记住  T[number]可以取数组的元素
// Record<string, never>可以实现对象 空对象判断  主要还是never的功劳
