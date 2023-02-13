<template>
  <button :class="buttonClass" :disabled="error || disabled" >
    {{ text }}
  </button>
</template>
<script>
import { computed } from 'vue'
export default {
  name: 'v-button',
  props: {
    text: {
      type: String,
      required: true
    },
    error: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const buttonClass = computed(() => {
      return ['v-button', {'v-button--error error': props.error}, {'not-focus': props.disabled}]
    })

    return {
      buttonClass,
    }
  }
}
</script>
<style lang="scss" scoped src="./v-button.scss"/>