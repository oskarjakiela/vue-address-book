<template>
  <div class="ContactsHome">
    <template v-if="emptySidebar">
      <AppSidebar />
    </template>
    <template v-else>
      <ContactsSidebar />
    </template>

    <AppBody>
      <router-view />
    </AppBody>
  </div>
</template>

<script>
import AppBody from '@/components/AppBody';
import AppSidebar from '@/components/AppSidebar';
import ContactsSidebar from '@/components/contacts/Sidebar';

export default {
  name: 'ContactsHome',
  components: {
    AppBody,
    AppSidebar,
    ContactsSidebar,
  },
  computed: {
    emptySidebar() {
      return [
        'contacts-add',
        'contacts-edit',
      ].includes(this.$route.name);
    },
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
