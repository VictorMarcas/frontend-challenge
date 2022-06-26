<template>
  <ValidationObserver ref="form" v-slot="{ invalid, handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmitForm)">
      <fieldset class="space-y-6">
        <div class="flex flex-col items-center gap-6 md:flex-row">
          <Avatar :src="form.avatar" :alt="form.alt" size="md" rounded />
          <ValidationProvider
            v-slot="{ errors }"
            name="avatar"
            rules="required|url"
            tag="div"
            class="w-full md:flex-1"
          >
            <Input
              id="avatar"
              v-model="form.avatar"
              name="avatar"
              label="Avatar"
              :errors="errors"
            />
          </ValidationProvider>
        </div>
        <ValidationProvider
          v-slot="{ errors }"
          name="name"
          rules="required"
          tag="div"
        >
          <Input
            id="name"
            v-model="form.name"
            name="name"
            label="Name"
            :errors="errors"
          />
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="surname"
          rules="required"
          tag="div"
        >
          <Input
            id="surname"
            v-model="form.last_name"
            name="surname"
            label="Surname"
            :errors="errors"
          />
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="profession"
          rules="required"
          tag="div"
        >
          <Input
            id="profession"
            v-model="form.profession"
            name="profession"
            label="Profession"
            :errors="errors"
          />
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="testimony"
          rules="required"
          tag="div"
        >
          <Textarea
            id="testomony"
            v-model="form.testimony"
            name="testimony"
            label="Testimony"
            :errors="errors"
          />
        </ValidationProvider>
        <div class="flex items-center gap-6 md:justify-between">
          <Button
            type="submit"
            rounded
            :disabled="invalid || loading"
            class="text-sm font-bold"
          >
            <span
              v-if="loading"
              class="inline-block w-6 h-6 border-4 rounded-full border-l-white border-white/30 animate-spin"
            ></span>
            <span v-text="type === 'edit' ? 'Edit user' : 'Create user'"></span>
          </Button>
          <NuxtLink
            to="/"
            class="px-4 text-sm font-bold text-gray-600 hover:text-indigo-500"
            >Cancel</NuxtLink
          >
        </div>
      </fieldset>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/button/Button.vue'
import Textarea from '@/components/ui/Textarea.vue'
import Avatar from '@/components/ui/Avatar.vue'
export default {
  name: 'FormUser',
  components: {
    Input,
    Button,
    ValidationObserver,
    ValidationProvider,
    Textarea,
    Avatar,
  },
  props: {
    type: {
      type: String,
      default: 'create',
    },
    user: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      loading: false,
      form: {
        avatar: '',
        name: '',
        last_name: '',
        profession: '',
        testimony: '',
      },
    }
  },
  computed: {
    ...mapState('users', ['errors']),
  },
  watch: {
    user(value) {
      if (this.type === 'edit') {
        this.form = { ...value }
      }
    },
    errors: {
      handler(value) {
        this.formSetErrors(value.errors)
        this.loading = false
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions('users', ['addUser']),
    onSubmitForm() {
      this.loading = true
      if (this.type === 'create') {
        this.addUser(this.form)
      } else {
        // this.updateUser(this.form)
        window.console.log({ ...this.user, ...this.form })
      }
    },
    formSetErrors(errors) {
      const filterErrors = {}
      Object.keys(errors).forEach((key) => {
        filterErrors[errors[key].param] = [`${errors[key].msg}`]
      })
      this.$refs.form.setErrors(filterErrors)
    },
  },
}
</script>
