<template>
  <Start v-if="screenStep === 1" @select-mode="onSelectMode" />
  <Play v-if="screenStep === 2" :cardsContext="cardsContext" @onFinish="onFinishGame" />
  <Result v-if="screenStep === 3" @start-again="onStartAgain" />
</template>

<script>
import Start from './components/Start.vue'
import Play from './components/Play.vue'
import Result from './components/Result.vue'
import { shuffled } from './utils/array'

export default {
  components: {
    Start,
    Play,
    Result
  },

  data() {
    return {
      screenStep: 3,
      cardsContext: []
    }
  },

  methods: {
    onSelectMode(mode) {
      if (mode) {
        this.screenStep = 2

        const arrayTemp1 = Array.from({ length: mode / 2 }, (_, i) => i + 1)
        const arrayTemp2 = [...arrayTemp1]
        const arrayMix = [...arrayTemp1, ...arrayTemp2]
        const cardsContext = shuffled(shuffled(shuffled(arrayMix)))

        this.cardsContext = cardsContext
      }
    },
    onFinishGame() {
      this.screenStep = 3
    },
    onStartAgain() {
      this.screenStep = 1
    }
  }
}
</script>
