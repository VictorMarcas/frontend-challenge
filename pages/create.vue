<template>
  <div class="w-full max-w-screen-sm p-6 lg:p-12">
    <h1 class="mb-8 text-2xl font-bold leading-tight font-poppins">
      Add new user
    </h1>
    <FormUser />
  </div>
</template>
<script>
import FormUser from '@/components/sections/FormUser.vue'
export default {
  name: 'CreatePage',
  components: { FormUser },
  layout: 'register',
  head() {
    return {
      title: 'Add new user',
    }
  },
}
</script>
