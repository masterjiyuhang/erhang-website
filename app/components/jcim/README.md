## IM iframe SDK 封装

```javascript
const { $JCIM } = useNuxtApp();
// im 弹窗
// 打开IM
try {
  await $JCIM.openIM()
} catch (error) {
  ElMessage.error('IM加载中，请稍后再试');
}
```

```javascript
const { $JCIM } = useNuxtApp();
// im 弹窗
// 打开客服发送消息
try {
  await $JCIM?.openIMSendMsg({ id: item.id, text: '' });
  console.log('消息发送成功');
} catch (error) {
  console.error('发送消息时出错:', error);
  ElMessage.error('IM加载中，请稍后再试');
}

// im 弹窗
// 发送运价卡片 feInformation or inquirySheet
try {
  await $JCIM?.openIMSendRateCard({ compId: '公司ID', id: '运价ID' }, 'feInformation');
  await $JCIM?.openIMSendRateCard({ compId: '公司ID', id: '运价ID' }, 'inquirySheet');
  console.log('消息发送成功');
} catch (error) {
  console.error('发送消息时出错:', error);
  ElMessage.error('IM加载中，请稍后再试');
}
```
