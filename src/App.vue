<template>
  <Account :username="username" v-if="username" @onLogout="onLogout" />
  <Login v-if="screenStep === 1" @onNextSelectMode="onNextSelectMode" />
  <SelectMode v-if="screenStep === 2 && username" @onSelectMode="onSelectMode" />
  <Play v-if="screenStep === 3 && username" :cardsContext="cardsContext" @onFinish="onFinishGame" />
  <Result
    :username="username"
    v-if="screenStep === 4 && username"
    @onStartAgain="onStartAgain"
    :timer="timer"
  />
</template>

<script>
import SelectMode from './components/Screen/SelectMode.vue'
import Play from './components/Screen/Play.vue'
import Result from './components/Screen/Result.vue'
import Login from './components/Screen/Login.vue'
import Account from './components/Account.vue'
import { shuffled } from './utils/array'
import storage from './utils/storage.js'
import { POKE_USERNAME } from './utils/constants'

export default {
  components: {
    Login,
    SelectMode,
    Play,
    Result,
    Account
  },
  data() {
    return {
      screenStep: 1,
      cardsContext: [],
      startedAt: 0,
      timer: 0,
      username: ''
    }
  },
  mounted() {
    const username = storage.getData(POKE_USERNAME)
    if (username) {
      this.screenStep = 2
      this.username = username
    }
  },
  methods: {
    onNextSelectMode(data) {
      storage.setData({ key: POKE_USERNAME, value: data.username })
      this.screenStep = 2
      this.username = data.username
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
      this.screenStep = 2
    },

    onLogout() {
      storage.removeDate(POKE_USERNAME)
      this.username = ''
      this.screenStep = 1
    }
  }
}
</script>
