<template>
  <aside class="AppSidebar">
    <slot />
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
};
</script>

<style scoped>
.AppSidebar {
  position: relative;
  border-right: 2px solid #f1f1f1;
  width: 29.5rem;
}
</style>
