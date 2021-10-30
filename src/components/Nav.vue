<template>
  <nav :class="$style.nav">
    <user-manager />
  </nav>
</template>

<script>
import UserManager from './UserManager.vue'
export default {
  components: {
    UserManager,
  },
}
</script>
<style module lang="css">
.nav {
  z-index: 50;
}
</style>
