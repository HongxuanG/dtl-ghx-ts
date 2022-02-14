type Replace<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : S

// 所用知识：
// infer + 模板字面量类型
// Conditional Type
// 先判断From是不是空，再把To和From进行替换