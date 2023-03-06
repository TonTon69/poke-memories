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
      <img src="@/assets/images/icon_back.png" alt="" width="40" />
    </div>
    <div class="card__face card__face--back">{{ card.value }}</div>
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
  methods: {
    onFlipCard() {
      if (this.rules.length >= 2 || this.isFlipped || this.isDisabled) return
      this.isFlipped = true
      this.$emit('flip-card', this.card)
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

.card__face--back {
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
