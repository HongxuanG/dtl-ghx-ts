interface MapTemplate {
  mapFrom: any;
  mapTo: any
}
// R 有可能是union，所以R extends { mapFrom: T[key], mapTo: unknown }限制一下
type MapTypes<T extends Record<string, any>, R extends MapTemplate> = {
  [key in keyof T]: T[key] extends R['mapFrom']
    ? R extends { mapFrom: T[key], mapTo: unknown }
      ? R['mapTo']
      : never
    : T[key]
}
