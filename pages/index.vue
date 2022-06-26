<template>
  <section class="py-12">
    <div class="container px-4 mx-auto">
      <header class="flex items-center">
        <h1 class="mr-auto text-xl font-bold font-poppins">Users</h1>
        <ButtonLink
          to="/create"
          rounded
          color="primary"
          class="px-6 text-sm font-bold"
          >Add user</ButtonLink
        >
      </header>
      <section
        class="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-6 lg:gap-8 mt-8"
      >
        <template v-if="users.length">
          <CardUser
            v-for="user in users"
            :key="user.id"
            :user="user"
          ></CardUser>
        </template>
        <template v-else>
          <SkeletonCardUser
            v-for="(_, index) in Array(8).keys()"
            :key="index"
          />
        </template>
      </section>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SkeletonCardUser from '@/components/skeletons/SkeletonCardUser.vue'
import CardUser from '@/components/sections/CardUser.vue'
import ButtonLink from '@/components/ui/button/ButtonLink.vue'

export default {
  name: 'IndexPage',
  components: { CardUser, SkeletonCardUser, ButtonLink },
  layout: 'default',
  data() {
    return {}
  },
  computed: {
    ...mapState('users', ['users']),
  },
  created() {
    this.getUsers()
  },
  methods: {
    ...mapActions('users', ['getUsers']),
  },
}
</script>
