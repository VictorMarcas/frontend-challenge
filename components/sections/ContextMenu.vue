<template>
  <div
    class="absolute right-0 w-40 py-4 bg-white border rounded-lg border-slate-50 z-[2]"
  >
    <Button
      type="button"
      minimal
      block
      class="text-sm hover:bg-gray-50"
      @click="onInformation"
    >
      <DocumentTextIcon class="w-5 h-5" />
      <span>Información</span>
    </Button>
    <Button
      type="button"
      minimal
      block
      class="text-sm hover:bg-gray-50"
      @click="onEdit"
    >
      <EditIcon class="w-5 h-5" />
      <span>Editar</span>
    </Button>
    <Button
      type="button"
      minimal
      block
      class="text-sm hover:bg-gray-50 hover:text-rose-500"
      @click="onDelete"
    >
      <DeleteIcon class="w-5 h-5" />
      <span>Eliminar</span>
    </Button>
  </div>
</template>

<script>
import DocumentTextIcon from '@/components/glyhps/DocumentTextIcon.vue'
import DeleteIcon from '@/components/glyhps/DeleteIcon.vue'
import EditIcon from '@/components/glyhps/EditIcon.vue'
import Button from '@/components/ui/button/Button.vue'
export default {
  name: 'ContextMenu',
  components: {
    Button,
    DeleteIcon,
    EditIcon,
    DocumentTextIcon,
  },
  data() {
    return {
      timeout: null,
    }
  },
  mounted() {
    this.timeout = setTimeout(() => {
      document.addEventListener('click', this.onOutsideClick)
    }, 100)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onOutsideClick)
    clearTimeout(this.timeout)
  },
  methods: {
    onInformation() {
      this.$emit('onInformation')
    },
    onEdit() {
      this.$emit('onEdit')
    },
    onDelete() {
      this.$emit('onDelete')
    },
    onOutsideClick() {
      this.$nextTick(() => {
        this.$emit('onOutsideClick')
      })
    },
  },
}
</script>
