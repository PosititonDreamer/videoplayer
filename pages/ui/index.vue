<template>
  <div class="ui">
    <v-button text="submit"/>
    <v-button text="submit" error/>
    <v-button text="submit" disabled/>
  </div>
</template>
<script>
import VButton from "../../components/ui/v-button/v-button";

export default {
  name: '',
  components: { VButton },
  setup() {

  }
}
</script>
<style lang="scss" scoped src="./ui.scss"/>