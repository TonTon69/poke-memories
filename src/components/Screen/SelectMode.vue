<template>
  <div class="screen">
    <div>
      <h1>Select mode to start game</h1>

      <!-- Mode  -->
      <div class="start__screen--cards">
        <div class="card" @click="onSelectMode(16)">4x4</div>
        <div class="card" @click="onSelectMode(36)">6x6</div>
        <div class="card" @click="onSelectMode(64)">8x8</div>
        <div class="card" @click="onSelectMode(100)">10x10</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['onSelectMode'],
  methods: {
    onSelectMode(mode) {
      this.$emit('onSelectMode', mode)
    }
  }
}
</script>

<style scoped>
.start__screen--cards {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid var(--light);
  cursor: pointer;
  font-size: 20px;
}

.card:hover {
  background-color: var(--light);
  color: var(--dark);
}
</style>
