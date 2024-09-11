export {}

declare global {
  type Maybe<T> = T | null | undefined

  interface Window {
    [key: string]: any
  }
}

declare module '#app' {
  interface NuxtApp {
    $getFingerprint(): Promise<string>
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $getFingerprint(): Promise<string>
  }
}
