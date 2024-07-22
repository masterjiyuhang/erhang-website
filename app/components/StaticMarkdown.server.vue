<template>
  <div
    class="flex flex-col heading-offset max-w-none prose prose-gray-800 rounded-lg"
  >
    <ContentRenderer id="content" :value="post">
      <template #empty>
        <p>No Content found.</p>
      </template>
    </ContentRenderer>
  </div>
</template>

<script lang="ts" setup>
  const { base, path } = defineProps({
    base: {
      type: String,
      default: '/',
    },
    path: {
      type: String,
      required: true,
    },
  })
  const { getPost } = usePost()
  const post = await getPost(base, path)
  console.log(
    '🚀 ~ file: StaticMarkdown.server.vue:26 ~ base, path:',
    base,
    path,
  )
</script>

<style></style>
