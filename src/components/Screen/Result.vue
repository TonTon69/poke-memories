<template>
  <div class="screen">
    <div class="result__inner">
      <h1>✨ Congratulations, {{ username }} ✨</h1>
      <br />
      <h3>{{ Math.round(timer / 920) }} seconds</h3>
      <br />
      <Button @onClick="onStartAgain" title="Start again" :style="`--clr:#FF44CC`" />
    </div>
  </div>
</template>

<script>
import Button from '../Button.vue'

export default {
  props: {
    timer: {
      type: Number,
      default() {
        return 0
      }
    },
    username: String
  },
  components: { Button },
  emits: ['onStartAgain'],
  methods: {
    onStartAgain() {
      this.$emit('onStartAgain')
    }
  }
}
</script>

<style scoped>
.result__inner {
  text-align: center;
}
</style>
