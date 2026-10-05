<script setup lang="ts">
const { cover, reveal } = usePageTransition()
</script>

<template>
  <VitePwaManifest />
  <AppLoader />
  <PageTransitionOverlay />
  <NuxtLayout>
    <NuxtPage
      :transition="{
        name: 'cascade',
        mode: 'out-in',
        css: false,
        onLeave: (el, done) => cover().then(done),
        onEnter: (el, done) => reveal().then(done),
      }"
    />
  </NuxtLayout>
</template>
