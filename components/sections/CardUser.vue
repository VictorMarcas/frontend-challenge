<template>
  <transition
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    enter-active-class="transition duration-150 ease-out"
    leave-active-class="transition duration-200 ease-in"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
    appear
  >
    <article
      v-if="Object.keys(user).length"
      aria-label="card"
      class="flex gap-4 px-3 py-4 border border-gray-200 rounded-lg md:p-4 bg-slate-50/50"
      :class="{ 'pointer-events-none grayscale opacity-90': loadingDeleteCard }"
    >
      <Avatar size="xs" :src="user.avatar" :alt="user.name" rounded>
        <img
          :src="user.company_logo"
          alt=""
          class="absolute z-[1] bottom-0 right-0 h-5 w-auto max-w-none"
        />
      </Avatar>
      <div
        class="relative flex flex-col flex-1 gap-2 pr-8"
        aria-label="description"
      >
        <button
          class="absolute top-0 right-0 inline-flex items-center justify-center w-8 h-8 lg:-right-2"
          aria-label="menu"
          @click="showContextMenu"
        >
          <DotsIcon class="w-5 h-5"></DotsIcon>
        </button>
        <transition
          enter-class="scale-0 opacity-0"
          enter-to-class="scale-100 opacity-100"
          enter-active-class="transition duration-200 ease-in-out origin-top-right transform"
          leave-active-class="transition duration-200 ease-out origin-top-right transform"
          leave-class="scale-100 opacity-100"
          leave-to-class="scale-0 opacity-0"
          appear
        >
          <ContextMenu
            v-if="contextMenu"
            @onInformation="onInformation"
            @onDelete="onDelete"
            @onEdit="onEdit"
            @onOutsideClick="hideContextMenu"
          />
        </transition>
        <div class="mb-auto">
          <h3 class="text-base font-bold text-gray-900 font-poppins">
            {{ user.name }} {{ user.last_name }}
          </h3>
          <p class="text-xs text-gray-500 md:text-sm">{{ user.profession }}</p>
        </div>
        <div class="flex items-center gap-3">
          <a
            v-if="user.github"
            :href="user.github"
            target="_blank"
            class="text-xs font-bold text-gray-400 uppercase transition-colors duration-150 hover:text-gray-900"
            >Github</a
          >
          <a
            v-if="user.twitter"
            :href="user.twitter"
            target="_blank"
            class="text-xs font-bold text-gray-400 uppercase transition-colors duration-150 hover:text-gray-900"
            >Twitter</a
          >
          <a
            v-if="user.linkedin"
            :href="user.linkedin"
            target="_blank"
            class="text-xs font-bold text-gray-400 uppercase transition-colors duration-150 hover:text-gray-900"
            >Linkedin</a
          >
        </div>
      </div>
      <Modal :is-open="modal" @onClose="hideModal">
        <DetailUser :id="user.id" />
      </Modal>
    </article>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'
import Avatar from '@/components/ui/Avatar.vue'
import ContextMenu from '@/components/sections/ContextMenu.vue'
import DotsIcon from '@/components/glyhps/DotsIcon.vue'
import Modal from '@/components/generic/Modal.vue'
import DetailUser from '@/components/sections/DetailUser.vue'
export default {
  name: 'CardUser',
  components: {
    Avatar,
    DotsIcon,
    ContextMenu,
    Modal,
    DetailUser,
  },
  props: {
    user: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      contextMenu: false,
      modal: false,
      loadingDeleteCard: false,
    }
  },
  methods: {
    ...mapActions('users', ['deleteUser']),
    showContextMenu() {
      this.contextMenu = true
    },
    hideContextMenu() {
      this.contextMenu = false
    },
    onInformation() {
      this.openModal()
    },
    onDelete() {
      this.deleteUser(this.user.id)
      this.loadingDeleteCard = true
    },
    onEdit() {
      this.$router.push({
        name: 'edit',
        query: {
          id: this.user.id,
        },
      })
    },
    openModal() {
      this.modal = true
    },
    hideModal() {
      this.modal = false
    },
  },
}
</script>
