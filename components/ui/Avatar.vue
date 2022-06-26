<template>
  <div class="mb-auto text-center shrink-0">
    <picture v-if="src" class="relative inline-flex">
      <img
        loading="lazy"
        :src="src"
        :alt="alt"
        width="80"
        height="80"
        :class="[styleTheme, styleSize, isRounded]"
      />
      <slot></slot>
    </picture>
    <div
      v-else
      :class="[styleSize, isRounded]"
      class="flex items-center justify-center bg-slate-50"
    >
      <PhotographIcon class="w-7 h-7 text-slate-300" />
    </div>
  </div>
</template>

<script>
import PhotographIcon from '@/components/glyhps/PhotographIcon.vue'
export default {
  name: 'Avatar',
  components: {
    PhotographIcon,
  },
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'sm',
    },
  },
  data() {
    return {
      styles: {
        default: 'object-cover object-center border-4 border-white',
        rounded: 'rounded-full',
        sizes: {
          xs: 'w-20 h-20',
          sm: 'w-24 h-24',
          md: 'w-32 h-32',
          lg: 'w-40 h-40',
        },
      },
    }
  },
  computed: {
    styleTheme() {
      return this.styles.default
    },
    styleSize() {
      return this.styles.sizes[this.size]
    },
    isRounded() {
      return this.rounded && this.styles.rounded
    },
  },
}
</script>
