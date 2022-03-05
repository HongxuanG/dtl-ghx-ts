type IndexOf<
  T extends unknown[],
  U,
  CountArr extends unknown[] = []
> = CountArr['length'] extends [...T, unknown]['length']
  ? -1
  : T[CountArr['length']] extends U
  ? CountArr['length']
  : IndexOf<T, U, [...CountArr, unknown]>
