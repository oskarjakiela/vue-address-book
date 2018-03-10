<template>
  <div id="App">
    <contacts-list :contacts="contacts" />
    <router-view />
  </div>
</template>

<script>
import ContactsList from '@/components/ContactsList';

export default {
  name: 'App',
  components: {
    ContactsList,
  },
  data() {
    return {
      contacts: [{
      }],
    };
  },
};
</script>

<style>
html {
  font-size: 16px;
}

#App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
