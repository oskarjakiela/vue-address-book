<template>
  <AppSidebar class="ContactsSidebar">
    <h2 class="ContactsSidebar__header">
      Contacts
    </h2>

    <contacts-search-box
      :query="query"
      :on-change="updateQuery"
    />

    <contacts-list
      :contacts="filteredContacts"
    />

    <router-link :to="{ name: 'contacts-add' }">
      <StyledButton full-width sticky>
        Add Contact
      </StyledButton>
    </router-link>
  </AppSidebar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AppSidebar from '@/components/AppSidebar';
import ContactsList from '@/components/contacts/List';
import ContactsSearchBox from '@/components/contacts/SearchBox';
import StyledButton from '@/components/styled/Button';

export default {
  name: 'ContactsSidebar',
  components: {
    AppSidebar,
    ContactsList,
    ContactsSearchBox,
    StyledButton,
  },
  computed: mapGetters([
    'filteredContacts',
    'query',
  ]),
  methods: mapActions([
    'updateQuery',
  ]),
};
</script>

<style scoped>
.ContactsSidebar {
}

.ContactsSidebar__header {
  padding: 0 1.75rem;
  font-size: 3rem;
  font-weight: bold;
  color: #5d647a;
}
</style>
