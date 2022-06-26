<template>
  <div>
    <div v-if="Object.keys(user).length">
      <Avatar
        class="mx-auto -mt-12"
        :src="user.avatar"
        :alt="user.name"
        rounded
      />
      <div aria-label="description" class="px-8 py-6 space-y-4">
        <div>
          <h3
            class="text-base font-bold text-center text-gray-900 font-poppins"
          >
            {{ user.name }} {{ user.last_name }}
          </h3>
          <p class="mt-1 text-xs text-center text-gray-500 md:text-sm">
            {{ user.profession }}
          </p>
        </div>
        <img
          :src="user.company_logo"
          alt=""
          class="w-auto h-5 mx-auto max-w-none"
        />
        <hr class="border-gray-100" />
        <h4 class="text-sm font-bold font-poppins">Testimony</h4>
        <p class="text-sm leading-relaxed text-gray-600">
          {{ user.testimony }}
        </p>
        <div class="flex items-center justify-center gap-6 pt-4">
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
    </div>
    <SkeletonDetailUser v-else />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Avatar from '@/components/ui/Avatar.vue'
import SkeletonDetailUser from '@/components/skeletons/SkeletonDetailUser'
export default {
  name: 'DetailUser',
  components: {
    SkeletonDetailUser,
    Avatar,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('users', ['user']),
  },
  created() {
    this.getDetailUser(this.id)
  },
  beforeDestroy() {
    this.cleanDetailUser()
  },
  methods: {
    ...mapActions('users', ['getDetailUser', 'cleanDetailUser']),
  },
}
</script>
