type EnglishLetters = | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
type MyCapitalize<S extends string> = S extends `${infer PrefixChar}${infer Other}` ? PrefixChar extends EnglishLetters ? `${Uppercase<PrefixChar>}${Other}` : S : S

// 结合infer和解构
// 获取首字母 再Uppercase