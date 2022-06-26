<template>
  <div class="w-full max-w-sm px-8 mx-auto space-y-4 text-center">
    <h1 class="text-5xl font-bold">{{ error.statusCode }} Error</h1>
    <p class="text-base leading-relaxed text-gray-500">
      Maybe this page is broken. <br />
      Please try again or return to the homepage.
    </p>
    <ButtonLink
      to="/"
      rounded
      block
      center
      color="primary"
      class="text-sm font-bold"
      >Back to homepage</ButtonLink
    >
  </div>
</template>

<script>
import ButtonLink from '@/components/ui/button/ButtonLink'
export default {
  name: 'ErrorPage',
  components: { ButtonLink },
  layout: 'ErrorLayout',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
