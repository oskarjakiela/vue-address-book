<template>
  <div class="App">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
</style>
