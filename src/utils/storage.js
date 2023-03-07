const storage = {
  setData({ key, value }) {
    return localStorage.setItem(key, value)
  },

  getData(key) {
    return localStorage.getItem(key)
  },

  removeDate(key) {
    return localStorage.removeItem(key)
  }
}

export default storage
