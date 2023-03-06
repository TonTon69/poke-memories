<template>
	<div class="start__screen">
		<div>
			<h1>Welcome to Poke Memories Game</h1>
			<h3>Select mode to play game</h3>

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
	methods: {
		onSelectMode(mode) {
			this.$emit('select-mode', mode);
		}
	}
}
</script>

<style scoped>
.start__screen h1 {
	font-size: 48px;
}

.start__screen {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100%;
}

.start__screen .start__screen--cards {
	display: flex;
	align-items: center;
	gap: 16px;
	margin-top: 32px;
}

.start__screen .start__screen--cards .card {
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
</style>