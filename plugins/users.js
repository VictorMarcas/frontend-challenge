import users from '@/services/users'

export default function ({ $axios }, inject) {
  inject('users', users($axios))
}
