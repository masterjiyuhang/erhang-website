export {}

declare global {
  type Maybe<T> = T | null | undefined

  interface Window {
    [key: string]: any
  }
}
