type ConstructTuple<L extends number, CountArr extends Array<unknown> = []> =
  CountArr['length'] extends L ? CountArr : ConstructTuple<L, [...CountArr, unknown]>
