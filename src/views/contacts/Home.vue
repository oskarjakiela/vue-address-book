<template>
  <div class="ContactsHome">
    <router-view name="sidebar" />

    <AppBody>
      <router-view />
    </AppBody>
  </div>
</template>

<script>
import AppBody from '@/components/AppBody';

export default {
  name: 'ContactsHome',
  components: {
    AppBody,
  },
};
</script>

<style scoped>
.ContactsHome {
  display: flex;
  min-height: 100%;
  width: 100%;
}
</style>
