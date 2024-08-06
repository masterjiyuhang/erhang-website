<template>
  <div>
    {{ locale }}
    <select v-model="locale" aria-label="Language switcher" class="bg-white">
      <option v-for="item in locales" :key="item.code" :value="item.code">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
  const { locale, locales, setLocaleCookie } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  watch(locale, (newLocale) => {
    if (newLocale) {
      navigateTo(switchLocalePath(newLocale))
      setLocaleCookie(newLocale)
    }
  })
</script>

<style></style>
