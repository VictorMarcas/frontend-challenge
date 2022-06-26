<template>
  <div class="relative space-y-2">
    <label v-if="label" :for="id" class="text-xs text-gray-500">{{
      label
    }}</label>
    <textarea
      :id="id"
      :name="name"
      :class="[styleTheme, isError]"
      :value="value"
      @input="handleInput"
    ></textarea>
    <div
      class="absolute inset-x-0 text-xs leading-tight text-right text-rose-500"
    >
      {{ errors[0] }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      styles: {
        default:
          'px-4 leading-4 py-3 rounded-md border border-gray-200 text-gray-700 w-full text-xs bg-white focus:ring-indigo-500 min-h-[100px] resize-y',
        error: 'border-rose-500 bg-rose-50 focus:ring-0',
      },
    }
  },
  computed: {
    styleTheme() {
      return this.styles.default
    },
    isError() {
      return this.errors.length > 0 && this.styles.error
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>
