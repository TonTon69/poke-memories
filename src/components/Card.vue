<template>
  <div
    class="card"
    :class="{ 'is-flipped': isFlipped, disabled: isDisabled }"
    :style="{
      height: `${(754 - 16 * 4) / Math.sqrt(cardsContext.length) - 16}px`,
      width: `${(((754 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4}px`,
      perspective: `${((((754 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4) * 2}px`
    }"
    @click="onFlipCard"
  >
    <div class="card__face card__face--front">
      <div
        class="card__content"
        :style="{
          'background-size': `${
            (((754 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 / 3
          }px ${(((754 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 / 3}px`
        }"
      ></div>
    </div>
    <div class="card__face card__face--back">
      <div class="card__content" :style="backgroundImageBackStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object
    },
    cardsContext: {
      type: Array,
      default: function () {
        return []
      }
    },
    rules: {
      type: Array
    }
  },
  data() {
    return {
      isFlipped: false,
      isDisabled: false
    }
  },
  emits: ['onFlipCard'],
  computed: {
    backgroundImageBackStyle() {
      return `background-image: url('./${this.card.img}')`
    }
  },
  methods: {
    onFlipCard() {
      if (this.rules.length >= 2 || this.isFlipped || this.isDisabled) return
      this.isFlipped = true
      this.$emit('onFlipCard', this.card)
    },

    onFlipBackCard() {
      this.isFlipped = false
    },

    onDisabledCard() {
      this.isDisabled = true
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 16px;
  cursor: pointer;
  background-color: var(--light);
  color: var(--dark);
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card__face {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}

.card__face--front .card__content {
  background: url('./images/icon_back.png') no-repeat center center;
  height: 100%;
  width: 100%;
}

.card__face--back .card__content {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
}

.card__face--back {
  font-size: 20px;
  transform: rotateY(180deg);
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card.disabled {
  cursor: not-allowed;
  border: 3px solid #53c653;
}
</style>
