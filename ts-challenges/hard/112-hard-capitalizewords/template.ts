type CapitalizeWord<S extends string> =
  S extends `${infer S1}${infer SE}${infer S2}`
    ? SE extends '.' | ' ' | ','
      ? `${S1}${SE}${CapitalizeWord<Capitalize<S2>>}`
      : `${S1}${SE}${CapitalizeWord<S2>}`
    : S

type CapitalizeWords<S extends string> = Capitalize<CapitalizeWord<S>>
