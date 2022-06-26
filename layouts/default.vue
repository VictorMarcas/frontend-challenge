<template>
  <div>
    <Header />
    <main>
      <Nuxt />
      <portal-target name="modal"></portal-target>
    </main>
  </div>
</template>
<script>
import Header from '@/components/layouts/Header.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Header,
  },
}
</script>
