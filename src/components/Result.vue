<template>
  <div class="result__screen">
    <div class="result__inner">
      <h1>Congratulation</h1>

      <button @click="onStartAgain">Start again</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
		onStartAgain() {
			this.$emit('start-again');
		}
	}
}
</script>

<style scoped>
.result__screen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  font-size: 48px;
}

.result__inner {
  text-align: center;
}

button {
	cursor: pointer;
}
</style>
