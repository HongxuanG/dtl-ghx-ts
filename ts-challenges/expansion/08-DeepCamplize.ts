// 把嵌套的对象所有的key命名改为 CamelCase
type original = {
  aaa_bbb: string;
  bbb_ccc: [
    {
        ccc_ddd: string;
    },
    {
        ddd_eee: string;
        eee_fff: {
            fff_ggg: string;
        }
    }
  ]
}
// 预期结果：
type DeepCamelizeRes = {
  aaaBbb: string;
  bbbCcc: [{
      cccDdd: string;
  }, {
      dddEee: string;
      eeeFff: {
        fffGgg: string;
      };
  }];
}
// 
type DeepCamelize<O extends Record<string, any>> = 
  O extends Record<string, any>[]
  ? CamelizeArr<O>
  : {
    // 核心逻辑
    [
      key in keyof O as key extends `${infer P}_${infer SS}` 
      ? `${P}${Capitalize<SS>}` 
      : key
    ]: DeepCamelize<O[key]>
  }
// 每个数组对象做DeepCamelize
type CamelizeArr<A > = 
  A extends [infer Cur, ...infer Rest]
  ? Cur extends object
    ? [DeepCamelize<Cur>, ...CamelizeArr<Rest>]
    : []
  : []



type DeepCamelizeRes1 = DeepCamelize<original>
