<template>
  <section>
    <div class="container flex justify-center mx-auto px-4 relative">
      <div class="rounded-lg">
        <div class="flex flex-wrap justify-center">
          <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <li v-for="post of posts" :key="post._path">
              <div class="p-8">
                <div class="space-y-5 xl:col-span-3">
                  <div class="space-y-6">
                    <h4>
                      <NuxtLinkLocale :to="post._path">
                        {{ post.title }}
                      </NuxtLinkLocale>
                    </h4>
                    <div
                      class="max-w-none dark:prose-invert lg:prose-lg mx-auto prose prose-neutral-800 dark:prose-neutral-100"
                    >
                      <ContentRenderer excerpt :value="post" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const { getPosts } = usePost()
  const posts = await getPosts('blog')
</script>

<style></style>
