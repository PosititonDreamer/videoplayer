<template>
  <div class="ui">
    <v-button text="submit" :key="1"/>
    <v-button text="submit" :key="2" error/>
    <v-button text="submit" :key="3" disabled/>
    <v-input
        name="test"
        v-model="value1"
        :error="inputError"
        @blur="toggle = true"
        @focus="toggle = false"/>
  </div>
</template>
<script>
import {computed, ref} from "vue";
import VButton from "../../components/ui/v-button/v-button";
import VInput from "../../components/ui/v-input/v-input";

export default {
  name: '',
  components: { VInput, VButton },
  setup() {
    const value1 = ref()
    const toggle = ref(false)


    const inputError = computed(() => {
      if(!value1.value && toggle.value) return 'this field must be filled in'
      return ''
    })

    return {value1, inputError, toggle}
  }
}
</script>
<style lang="scss" scoped src="./ui.scss"/>