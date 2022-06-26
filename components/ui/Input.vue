<template>
  <div class="relative space-y-2">
    <label v-if="label" :for="id" class="text-xs text-gray-500">{{
      label
    }}</label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :value="value"
      :class="[styleTheme, isError]"
      @input="handleInput"
    />
    <div
      class="absolute inset-x-0 text-xs leading-tight text-right text-rose-500"
    >
      {{ errors[0] }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
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
          'px-4 leading-4 py-3 rounded-md border border-gray-200 text-gray-700 w-full text-xs bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500',
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
