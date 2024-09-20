export {}

declare global {
  type Maybe<T> = T | null | undefined
}

declare module '#app' {
  interface NuxtApp {
    $globalJoinUs(data: any): void
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $globalJoinUs(data: any): void
  }
}
