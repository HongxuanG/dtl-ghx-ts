type FilterOut<T extends any[], F, ResultArr extends unknown[] = []> = 
  T extends [infer First, ...infer Rest]
    ? [First] extends [F]
      ? FilterOut<Rest, F, ResultArr>
      : FilterOut<Rest, F, [...ResultArr, First]>
    : ResultArr
