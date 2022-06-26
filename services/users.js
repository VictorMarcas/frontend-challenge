export default ($axios) => ({
  getUsers() {
    return $axios.get('/users')
  },
  addUser(payload) {
    return $axios.post('/users/add', payload)
  },
  deleteUser(id) {
    return $axios.delete(`/users/delete/${id}`)
  },
  getDetailUser(id) {
    return $axios.get(`/users/${id}`)
  },
})
