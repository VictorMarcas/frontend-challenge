<template>
  <button
    :type="type"
    :aria-label="ariaLabel"
    :disabled="disabled"
    :class="[
      styleDefault,
      styleTheme,
      isDisabled,
      isCentered,
      isRounded,
      isBlock,
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
import Mixin from './mixin'
export default {
  name: 'Button',
  mixins: [Mixin],
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>
