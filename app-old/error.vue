<script setup>
  const props = defineProps({
    error: {
      type: Object,
      default(/*rawProps*/) {
        return {
          url: '-',
          statusCode: 404,
          statusMessage: 'Not Found',
          message: '(404 Not Found)',
          stack: '',
          data: '{"error":"FetchError:  (404 Not Found)"}',
        }
      },
    },
  })

  const message = computed(() => String(props.error?.message || ''))
  const is404 = computed(
    () => props.error?.statusCode === 404 || message.value?.includes('404'),
  )
  const isDev = import.meta.dev

  function handleError() {
    return clearError({ redirect: '/' })
  }

  definePageMeta({
    isWhite: true,
  })
</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <div
      class="flex flex-col gap-4 items-center my-12 text-center justify-center"
    >
      <div class="text-2xl leading-9 text-red-500">
        {{ is404 ? 'This page could not be found' : 'An error occurred' }}
      </div>
      <div class="text-xl leading-7 opacity-50">
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </div>
      <pre v-if="isDev" class="w-full whitespace-normal">{{ error }}</pre>
      <el-button
        class="bg-error-500 px-3 py-2 text-2xl leading-6 font-medium tracking-wide normal-case rounded-lg"
        type="danger"
        size="large"
        @click="handleError"
      >
        &lt; Go Back
      </el-button>
    </div>
  </NuxtLayout>
</template>
