type ToNumber<S extends string, CoutArr extends unknown[] = []> = S extends `${CoutArr['length']}` ? CoutArr['length'] : ToNumber<S, [...CoutArr, unknown]>