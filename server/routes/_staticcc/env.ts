export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  return {
    code: '200',
    PROD_CLIENT_PROXY_API: config.public.PROD_CLIENT_PROXY_API,
    SAPI_DOMAIN: config.public.SAPI_DOMAIN,
    NEWS_API_DOMAIN: config.public.NEWS_API_DOMAIN,
    DOMAIN_NAME: config.public.DOMAIN_NAME,
    ENV: config.public.ENV,
    LOGIN_SITE: config.public.LOGIN_SITE,
    RELEASE_VERSION: config.public.RELEASE_VERSION,
    RELEASE_CNT: config.public.RELEASE_CNT,
    RELEASE_TIME: config.public.RELEASE_TIME,
    RELEASE_TAG: config.public.RELEASE_TAG,
    RELEASE_STARTTIME: config.public.RELEASE_STARTTIME,
    globalPublic: config.public,
  }
})
