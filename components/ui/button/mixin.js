export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    minimal: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      theme: {
        default:
          'leading-6 py-3 px-4 inline-flex items-center space-x-2 transition-colors duration-200',
        center: 'justify-center',
        block: 'w-full',
        rounded: 'rounded-md',
        disabled: 'disabled:opacity-60 disabled:cursor-not-allowed',
        primary: {
          outline: 'borde border-indigo-500 text-indigo-500',
          solid: 'text-white bg-indigo-500 hover:bg-indigo-500/80',
        },
        secondary: {
          outline: 'borde border-gray-500 text-gray-500',
          solid: 'text-white bg-gray-700 hover:bg-indigo-500/80',
        },
      },
    }
  },
  computed: {
    styleTheme() {
      if (this.minimal) return
      if (this.outline && this.color) {
        return this.theme[this.color].outline
      }
      return this.theme[this.color].solid
    },
    styleDefault() {
      return this.theme.default
    },
    isDisabled() {
      return this.disabled && this.theme.disabled
    },
    isCentered() {
      return this.center && this.theme.center
    },
    isRounded() {
      return this.rounded && this.theme.rounded
    },
    isBlock() {
      return this.block && this.theme.block
    },
  },
}
