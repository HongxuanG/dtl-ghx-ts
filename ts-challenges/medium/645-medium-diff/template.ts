// 找出两个对象差异
type Diff<O, O1> = O extends O1
  ? {
      [key in Exclude<keyof O, keyof O1>]: O[key]
    }
  : {
      [key in Exclude<keyof O1, keyof O>]: O1[key]
    }
