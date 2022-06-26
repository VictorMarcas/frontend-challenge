<template>
  <div class="w-full max-w-screen-sm p-6 lg:p-12">
    <h1 class="mb-8 text-2xl font-bold leading-tight font-poppins">
      Edit user
    </h1>
    <FormUser :user="user" type="edit" />
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import FormUser from '@/components/sections/FormUser.vue'
export default {
  name: 'EditPage',
  components: {
    FormUser,
  },
  layout: 'register',
  asyncData({ query }) {
    const { id } = query
    return { id }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Edit user',
    }
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
