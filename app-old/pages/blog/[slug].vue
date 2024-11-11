<template>
  <div class="mt-12 mx-auto px-4 w-full">
    <div class="flex flex-col rounded-lg p-4 bg-gray-100">
      <article class="dark:xl:divide-gray-700 xl:divide-gray-200 xl:divide-y">
        <header class="pt-6 relative space-y-1 text-center xl:pb-10">
          <div class="flex justify-center mb-4 lg:absolute lg:justify-start">
            <BaseButton :to="linkPath"><span>Go Back</span></BaseButton>
          </div>
          <div>
            <h1>
              {{ post.title }}
            </h1>
          </div>
        </header>
        <div
          class="dark:divide-gray-700 divide-primary-700 divide-y pb-16 xl:divide-y-0 xl:gap-x-10 xl:grid xl:grid-cols-4 xl:pb-20 xl:sticky"
        >
          <div
            class="hidden xl:block xl:sticky xl:top-28 bg-secondary-800 pr-4 py-4 pl-8"
          >
            <PostCompTheAuthor v-bind="author" />
          </div>
          <div
            class="dark:divide-gray-700 divide-gray-200 divide-y xl:col-span-3 xl:pb-0 xl:row-span-2"
          >
            <div
              id="post"
              class="dark:prose-invert dark:prose-gray-100 flex flex-col heading-offset max-w-none prose prose-gray-800 rounded-lg"
            >
              <ContentRenderer id="content" :value="post">
                <template #empty>
                  <div>No Content Found.</div>
                </template>
              </ContentRenderer>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const localeRoute = useLocaleRoute()
  const { locale } = useI18n()
  const linkPath = computed(() => {
    const route = localeRoute('blog', locale.value)
    return route != null ? route.path : '/'
  })

  definePageMeta({
    title: 'Blog',
    description: 'Read, Learn, Enjoy: Your Blog Destination!',
    hidden: true,
    navOrder: 5,
    type: 'secondary',
    icon: 'i-mdi-home',
  })

  const { getPost } = usePost()
  const slug =
    useRoute().params.slug.toString().replace(/,/g, '/') ||
    useRoute().name.toString().replace(/,/g, '/')
  const post = await getPost('blog', slug)
  console.log('🚀 ~ file: [slug].vue:66 ~ post:', post)

  const author = computed(() => {
    const { twitter, avatar, gravatar, author } = post.value
    return { twitter, avatar, gravatar, author }
  })
  useServerSeoMeta({
    description: () => post.value?.title,
  })

  useHead({
    title: () => post.value?.title,
  })
</script>

<style></style>
