<template>
  <Login v-if="screenStep === 1" @onNextSelectMode="onNextSelectMode" />
  <SelectMode v-if="screenStep === 2" @onSelectMode="onSelectMode" />
  <Play v-if="screenStep === 3" :cardsContext="cardsContext" @onFinish="onFinishGame" />
  <Result v-if="screenStep === 4" @onStartAgain="onStartAgain" />
</template>

<script>
import SelectMode from './components/Screen/SelectMode.vue'
import Play from './components/Screen/Play.vue'
import Result from './components/Screen/Result.vue'
import Login from './components/Screen/Login.vue'
import { shuffled } from './utils/array'
import storage from './utils/storage.js'
import { POKE_USERNAME } from './utils/constants'

export default {
  components: {
    Login,
    SelectMode,
    Play,
    Result
  },
  data() {
    return {
      screenStep: 1,
      cardsContext: [],
      startedAt: 0,
      timer: 0
    }
  },
  mounted() {
    const username = storage.getData(POKE_USERNAME)
    if (username) {
      this.screenStep = 2
    }
  },
  methods: {
    onNextSelectMode(data) {
      storage.setData({ key: POKE_USERNAME, value: data.username })
      this.screenStep = 2
    },
    onSelectMode(mode) {
      if (mode) {
        const arrayTemp1 = Array.from({ length: mode / 2 }, (_, i) => i + 1)
        const arrayTemp2 = [...arrayTemp1]
        const arrayMix = [...arrayTemp1, ...arrayTemp2]
        const cardsContext = shuffled(shuffled(shuffled(arrayMix)))

        this.cardsContext = cardsContext
        this.startedAt = new Date().getTime()
        this.screenStep = 3
      }
    },
    onFinishGame() {
      this.screenStep = 4
      this.timer = new Date().getTime() - this.startedAt
    },
    onStartAgain() {
      this.screenStep = 1
    }
  }
}
</script>
