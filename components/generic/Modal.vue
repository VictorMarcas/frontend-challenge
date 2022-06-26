<template>
  <portal to="modal">
    <div v-if="modal" class="fixed inset-0 inset-x-0 z-50">
      <transition
        enter-active-class="transition-opacity duration-150 ease-out-quad"
        leave-active-class="transition-opacity duration-200 ease-in-quad"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        appear
        @before-leave="overlayLeaving = true"
        @after-leave="overlayLeaving = false"
      >
        <div v-if="showOverlay" class="fixed inset-0 transition-opacity z-[1]">
          <div class="absolute inset-0 backdrop-blur bg-gray-900/50"></div>
        </div>
      </transition>
      <div
        class="relative flex justify-center w-full h-full min-h-full px-4 py-4 overflow-y-auto z-[2]"
      >
        <transition
          enter-active-class="transition duration-200 transform ease-out-quad"
          leave-active-class="transition duration-200 transform ease-in-quad"
          enter-class="scale-75 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-class="scale-100 opacity-100"
          leave-to-class="scale-75 opacity-0"
          appear
          @before-leave="contentLeaving = true"
          @after-leave="contentLeaving = false"
        >
          <div
            v-if="showContent"
            class="relative w-full max-w-md my-auto bg-white rounded-lg drop-shadow-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <button
              class="w-8 h-8 absolute right-6 z-[3] top-6 text-gray-400 transition-colors duration-200 hover:text-gray-900 inline-flex items-center justify-center"
              @click="onClose"
            >
              <XIcon class="w-7 h-7" />
            </button>
            <slot></slot>
          </div>
        </transition>
      </div>
    </div>
  </portal>
</template>
<script>
import XIcon from '@/components/glyhps/XIcon.vue'
export default {
  name: 'Modal',
  components: {
    XIcon,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modal: false,
      contentLeaving: false,
      overlayLeaving: false,
      showContent: false,
      showOverlay: false,
    }
  },
  computed: {
    leaving() {
      return this.overlayLeaving || this.contentLeaving
    },
  },
  watch: {
    isOpen(value) {
      if (value) {
        this.showModal()
      } else {
        this.hideModal()
      }
    },
    leaving(value) {
      if (!value) {
        this.modal = false
      }
    },
  },
  methods: {
    showModal() {
      this.modal = true
      this.showOverlay = true
      this.showContent = true
      document.documentElement.style.overflow = 'hidden'
      document.addEventListener('keydown', this.onEscape)
    },
    hideModal() {
      this.showContent = false
      this.showOverlay = false
      document.documentElement.style.overflow = ''
      document.removeEventListener('keydown', this.onEscape)
    },
    onEscape(e) {
      if (this.modal && e.keyCode === 27) {
        this.onClose()
      }
    },
    onClose() {
      this.$emit('onClose')
    },
  },
}
</script>
