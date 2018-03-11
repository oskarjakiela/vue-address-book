<template>
  <div class="App">
    <aside class="App__sidebar">
      <h2 class="App__sidebar__header">Contacts</h2>

      <contacts-search-box
        :query="query"
        :on-change="updateQuery"
      />

      <contacts-list
        :contacts="filteredContacts"
      />
    </aside>

    <main class="App__body">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ContactsList from '@/components/ContactsList';
import ContactsSearchBox from '@/components/ContactsSearchBox';

export default {
  name: 'App',
  components: {
    ContactsList,
    ContactsSearchBox,
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

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-size: 16px;
}

.App {
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #161b26;
  min-height: 100%;
}

.App__sidebar {
  border-right: 2px solid #f1f1f1;
  max-width: 29.5rem;
}

.App__sidebar__header {
  padding: 0 1.75rem;
  font-size: 3rem;
  font-weight: bold;
  color: #5d647a;
}

.App__body {
  width: 100%;
}
</style>
