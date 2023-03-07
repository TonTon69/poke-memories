<template>
  <div class="account">
    <span>{{ username }},</span>
    <span @click="onLogout">Logout ✈</span>
  </div>
</template>

<script>
export default {
  props: {
    username: String
  },
  emits: ['onLogout'],
  methods: {
    onLogout() {
      this.$emit('onLogout')
    }
  }
}
</script>

<style scoped>
.account {
  position: absolute;
  right: 2rem;
  top: 2rem;
  z-index: 9999;
}

.account span:first-child {
  margin-right: 12px;
}

.account span:last-child {
  cursor: pointer;
}
</style>
