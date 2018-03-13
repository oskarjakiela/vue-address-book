<template>
  <main class="AppBody">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'AppBody',
};
</script>

<style scoped>
.AppBody {
  flex: 1;
}
</style>
