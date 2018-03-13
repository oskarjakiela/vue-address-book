<template>
  <span class="ContactsListGroupHeader">
    {{ header }}
  </span>
</template>

<script>
export default {
  name: 'ContactsListGroupHeader',
  props: {
    header: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.ContactsListGroupHeader {
  padding: 0 2rem;
  line-height: 2rem;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  color: #5d647a;
}
</style>
