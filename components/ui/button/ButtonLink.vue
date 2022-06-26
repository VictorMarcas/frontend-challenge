<template>
  <NuxtLink
    :to="to"
    :aria-label="ariaLabel"
    :class="[
      styleDefault,
      styleTheme,
      isDisabled,
      isCentered,
      isRounded,
      isBlock,
    ]"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script>
import Mixin from './mixin'
export default {
  name: 'ButtonLink',
  mixins: [Mixin],
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>
