export const state = () => ({
  users: [],
  user: {},
  errors: {
    type: null,
    errors: {},
  },
})

export const actions = {
  getUsers({ commit }) {
    this.$users.getUsers().then((response) => {
      const { result } = response.data
      commit('SET_USERS', result)
    })
  },
  addUser({ commit }, payload) {
    this.$users
      .addUser(payload)
      .then((response) => {
        /* const { data } = response
        commit('ADD_USER', data) */
        this.app.router.push('/')
        commit('CLEAN_ERRORS')
      })
      .catch((error) => {
        const { data } = error.response
        const { errors } = data
        commit('SET_ERRORS', { type: 'form', errors })
      })
  },
  deleteUser({ commit }, id) {
    this.$users.deleteUser(id).then((response) => {
      const { id } = response.data
      commit('DELETE_USER', id)
    })
  },
  getDetailUser({ commit }, payload) {
    this.$users
      .getDetailUser(payload)
      .then((response) => {
        const { result } = response.data
        commit('SET_DETAIL_USER', result)
      })
      .catch((_) => {
        this.app.router.push('/404')
      })
  },
  cleanDetailUser({ commit }) {
    commit('CLEAN_DETAIL_USER')
  },
}

export const getters = {
  getUsers(state) {
    return state.users
  },
}

export const mutations = {
  SET_USERS(state, payload) {
    state.users = payload
  },
  ADD_USER(state, payload) {
    state.users.push(payload)
  },
  DELETE_USER(state, payload) {
    state.users = state.users.filter((user) => user.id !== payload)
  },
  SET_DETAIL_USER(state, payload) {
    state.user = payload
  },
  CLEAN_DETAIL_USER(state) {
    state.user = {}
  },
  SET_ERRORS(state, payload) {
    state.errors = payload
  },
  CLEAN_ERRORS(state) {
    state.errors = {
      type: null,
      errors: {},
    }
  },
}
