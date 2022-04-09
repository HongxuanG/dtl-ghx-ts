type IsAny<T> = 'checkAny' extends 1 & T ? true : false

/**
 * 你要知道：any类型和任意类型都是any类型
 */