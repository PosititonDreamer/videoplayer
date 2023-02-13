<template>
  <div :class="classInput">
    <label :class="focusInput" :for="idInput">{{ name }}</label>
    <input
        :id="idInput"
        ref="inputBlock"
        v-model="valueInput"
        class="v-input__input"
        @focusout="focused = false"
        @focusin="focused = true"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
        @input="useUpdateValue"
    >
    <span v-if="error" class="v-input__error">{{ error }}</span>
  </div>
</template>
<script>
import { computed, getCurrentInstance, ref } from 'vue';

export default {
  name: 'v-input',
  emits: [
    'update:modelValue', 'blur', 'focus'
  ],
  props: {
    name: {
      type: String,
      required: true
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const valueInput = ref('')
    const inputBlock = ref()
    const focused = ref(false)

    const classInput = computed(() => {
      return ['v-input', { 'v-input--error error': props.error }]
    })

    const focusInput = computed(() => {
      return ['v-input__name', { 'v-input__name--top': valueInput.value || focused.value }]
    })

    const useUpdateValue = (event) => {
      emit('update:modelValue', event.target.value)
    }


    const idInput = getCurrentInstance().uid.toString()

    return { classInput, idInput, valueInput, focusInput, inputBlock, focused, useUpdateValue }
  }
}
</script>
<style lang="scss" scoped src="./v-input.scss"/>