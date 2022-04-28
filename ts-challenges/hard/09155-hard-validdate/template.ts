// type Month = [1,2,3,4,5,6,7,8,9,10,11,12]
// type Day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// type TupleToString<S extends string[], Result extends string = ''> = 
//   S extends [infer F, ...infer Rest]
//     ? F extends string 
//       ? Rest extends string[]
//         ? `${F}${TupleToString<Rest>}`
//         : never
//       : never
//     : Result
// type TupleToStringRes = TupleToString<['1','2','3','4']>

// type SubString<S extends string, L extends number> = SubStringHelper<StringToTuple<S>, L>

// type SubStringHelper<Arr extends string[], L extends number, CountArr extends string[] = [], Result extends string[] = []> = 
//   Arr extends [infer F, ...infer Rest] 
//     ? F extends string 
//       ? Rest extends string[]
//         ? CountArr['length'] extends L
//           ? SubStringHelper<Rest, L, [], [TupleToString<CountArr>, ...Result]>
//           : SubStringHelper<Rest, L, [...CountArr, F], Result>
//         : Result
//       : Result
//     : Result
// type te = SubString<'0201', 1>
// // 我的思路：
// // 1. 2 为间隔截取两个字符串作为一个长度为1的数组
// // 2. 数组中每个元素转成 number ，通过 Month 和 Day 比较大小，两个都在范围内才返回true 否则false
// type ValidDateHelper<T extends unknown[], M extends unknown[] = [], D extends unknown[] = []> = any

// type test444 = StringToTuple<'0201'>

// type ValidDate<T extends string> = ValidDateHelper<StringToTuple<T>>

// 想复杂了，其实类型匹配就行，我那思路是按照js的思路来的，没用匹配的思想


// 答案

type one2nine = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type zero2nine = '0' | one2nine;

type thirty = `0${one2nine}` | `1${zero2nine}` | `2${zero2nine}` | '30'
type thirtyone = thirty | '31'
type twentyeight = Exclude<thirty,'30' | '29'>

type DateMap = {
  '01':thirtyone;
  '02':twentyeight;
  '03':thirtyone;
  '04':thirty;
  '05':thirtyone;
  '06':thirty;
  '07':thirtyone;
  '08':thirtyone;
  '09':thirty;
  '10':thirtyone;
  '11':thirty;
  '12':thirtyone;
}

type ValidDate<
  T extends string
> = 
T extends `${infer F}${infer S}${infer D}`?
  `${F}${S}` extends keyof DateMap?
    D extends DateMap[`${F}${S}`]?true:false
    :false
  :never;

