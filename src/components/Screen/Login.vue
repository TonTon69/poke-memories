<template>
  <div class="screen">
    <div>
      <h1>Welcome to Poke Memories Game 👋</h1>
      <br />
      <br />
      <p>Enter user name to play game</p>
      <br />
      <div class="input__container">
        <Input
          :name="username"
          label="User name"
          @onChange="onChange"
          @onEnterChange="onEnterChange"
        />
      </div>
      <br />
      <br />
      <div>
        <Button title="Next" :style="`--clr:#0FF0FC`" @onClick="onNextSelectMode" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../Input.vue'
import Button from '../Button.vue'

export default {
  components: {
    Input,
    Button
  },
  emits: ['onNextSelectMode'],
  data() {
    return {
      username: ''
    }
  },
  methods: {
    handleNext(username) {
      if (!username) {
        alert('Please enter a username')
        return
      }

      this.$emit('onNextSelectMode', { username })
    },

    onNextSelectMode() {
      this.handleNext(this.username)
    },

    onChange(data) {
      this.username = data.text
    },

    onEnterChange(data) {
      this.handleNext(data.text)
    }
  }
}
</script>

<style scoped>
.input__container {
  display: flex;
  justify-content: center;
}
</style>
