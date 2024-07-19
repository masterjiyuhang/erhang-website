export interface Post {
  date: Date
  author: string
  title: string
}
export const usePost = () => {
  /**
   * 根据时间排序
   */
  function byDate(a, b) {
    return Number(Number(new Date(b.date)) - Number(new Date(a.date)))
  }

  /**
   * 异步获取指定路径下的文章列表，并根据日期排序。
   *
   * 此函数通过使用`useAsyncData`钩子来异步加载数据，它专门用于获取博客导航数据。
   * 默认情况下，从根路径开始查询，但可以通过传入不同的路径来查询其他位置的数据。
   *
   * @param base 查询的基准路径，默认为根路径。
   * @param path 查询的具体路径。
   * @returns 返回一个计算属性，该属性在数据加载后，会返回按日期排序的文章列表。
   */
  async function getPost(base = '/', path: string) {
    const { data: post } = await useAsyncData('blog-navigation', () => {
      return queryContent(base, path).findOne()
    })

    return post
  }

  /**
   * 异步获取文章列表，并根据日期排序。
   *
   * 此函数通过使用`useAsyncData`钩子来异步获取指定基础路径下的文章列表数据。
   * 它使用了默认参数`/`，表示如果未指定路径，则获取根路径下的文章列表。
   * 获取到的数据将被计算属性包装，以确保数据的响应式。
   *
   * @param base - 文章列表的查询基础路径，默认为根路径`/`。
   * @returns 返回一个计算属性，该属性在访问时会返回按日期排序的文章列表。
   */
  async function getPosts(base = '/') {
    const { data: posts } = await useAsyncData('blog-navigation', () => {
      return queryContent(base).find()
    })

    return computed(() => posts.value.sort(byDate))
  }

  return {
    byDate,
    getPost,
    getPosts,
  }
}
