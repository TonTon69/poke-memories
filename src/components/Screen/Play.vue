<template>
  <div class="screen">
    <div
      class="play__screen--cards"
      :style="{
        width: `${
          ((((754 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 + 16) *
          Math.sqrt(cardsContext.length)
        }px`
      }"
    >
      <Card
        v-for="(item, index) in cardsContext"
        ref="card"
        :key="index"
        :card="{ index, value: item }"
        :cardsContext="cardsContext"
        :rules="rules"
        @onFlipCard="checkResult($event)"
      />
    </div>
  </div>
</template>

<script>
import Card from '../Card.vue'

export default {
  components: {
    Card
  },
  props: {
    cardsContext: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      rules: [],
      timer: null
    }
  },
  methods: {
    checkResult(card) {
      if (this.rules.length === 2) return false
      this.rules.push(card)

      if (this.rules.length === 2 && this.rules[0].value !== this.rules[1].value) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$refs.card[this.rules[0].index].onFlipBackCard()
          this.$refs.card[this.rules[1].index].onFlipBackCard()
          this.rules = []
        }, 800)
      } else if (this.rules.length === 2 && this.rules[0].value === this.rules[1].value) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$refs.card[this.rules[0].index].onDisabledCard()
          this.$refs.card[this.rules[1].index].onDisabledCard()
          this.rules = []

          const disabledElements = document.querySelectorAll(
            '.play__screen .play__screen--cards .card.disabled'
          )

          if (disabledElements && disabledElements.length === this.cardsContext.length - 2)
            this.$emit('onFinish')
        }, 1000)
      } else return false
    }
  }
}
</script>

<style scoped>
.play__screen--cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0 auto;
}
</style>
