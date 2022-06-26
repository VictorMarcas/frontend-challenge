<template>
  <div>
    <Header />
    <main class="grid w-full place-items-center">
      <Nuxt />
    </main>
  </div>
</template>
<script>
import Header from '@/components/layouts/Header.vue'
export default {
  name: 'RegisterLayout',
  components: {
    Header,
  },
}
</script>
