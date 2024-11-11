<template>
  <div class="container p-0">
    <BaseTitle title="实用工具" class="my-2" />

    <LinkShowCard title="" :link-list="toolsList" class="w-full" />
  </div>
</template>

<script lang="ts" setup>
  const toolsList = ref([
    {
      name: '口岸杂费',
      href: 'https://info.jctrans.com/gongju/chaxunlei/201111251121448.shtml',
    },
    {
      name: '世界货币',
      href: 'https://info.jctrans.com/gongju/chaxunlei/201111251121122.shtml',
    },
    {
      name: '单位换算',
      href: 'https://info.jctrans.com/gongju/jisuanlei/201111251121062.shtml',
    },
    {
      name: '危品标识',
      href: 'https://info.jctrans.com/gongju/chaxunlei/201111251121443.shtml',
    },
    {
      name: '附加费用',
      href: 'https://info.jctrans.com/gongju/chaxunlei/201111251121405.shtml',
    },
    { name: '海关关税', href: 'https://info.jctrans.com/gongju/hgsl.shtml' },
    {
      name: '航运术语',
      href: 'https://info.jctrans.com/gongju/zidianlei/201111251121112.shtml',
    },
    {
      name: '贸易术语',
      href: 'https://info.jctrans.com/gongju/cx3/20061129357898.shtml',
    },
    {
      name: '提单流转',
      href: 'https://info.jctrans.com/gongju/chaxunlei/201111251121465.shtml',
    },
    {
      name: '高速公路大全',
      href: 'https://info.jctrans.com/gongju/cx1/20051031176730.shtml',
    },
    {
      name: '出口流程',
      href: 'https://info.jctrans.com/gongju/cx4/2005719109465.shtml',
    },
    {
      name: '贸易基础知识',
      href: 'https://info.jctrans.com/gongju/maoyishouce/default.shtml',
    },
    {
      name: '邮编区号',
      href: 'https://info.jctrans.com/gongju/ybqh/default.shtml',
    },
    {
      name: '物流术语',
      href: 'https://info.jctrans.com/gongju/zidianlei/201111251121076.shtml',
    },
    {
      name: '车站代码',
      href: 'https://info.jctrans.com/gongju/chaxunlei/201111251121119.shtml',
    },
    {
      name: '世界银行',
      href: 'https://info.jctrans.com/gongju/chaxunlei/201111251121348.shtml',
    },
    {
      name: '报关实务',
      href: 'https://info.jctrans.com/gongju/baoguanshiwu/default.shtml',
    },
    {
      name: '航贸参数',
      href: 'https://info.jctrans.com/gongju/wmdz/default.shtml',
    },
  ])
</script>

<style></style>
