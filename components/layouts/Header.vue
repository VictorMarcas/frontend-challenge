<template>
  <header class="py-6 bg-gray-100">
    <div class="container px-8 mx-auto text-center">
      <NuxtLink to="/" class="inline-flex">
        <Logo />
      </NuxtLink>
    </div>
  </header>
</template>
<script>
import Logo from '@/components/generic/Logo.vue'
export default {
  name: 'Header',
  components: { Logo },
}
</script>
