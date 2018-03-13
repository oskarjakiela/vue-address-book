<template>
  <div class="ContactsSearchBox">
    <input
      class="ContactsSearchBox__input"
      type="text"
      name="query"
      :value="query"
      @input="onChange($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'ContactsSearchBox',
  props: {
    query: {
      type: String,
    },
    onChange: {
      type: Function,
    },
  },
};
</script>

<style>
.ContactsSearchBox {
  padding: 0 1.75rem;
}

.ContactsSearchBox__input {
  margin-bottom: 1.625rem;
  border: 2px solid #b3b3b3;
  border-radius: .625rem;
  padding: .625rem;
  height: 3.75rem;
  width: 100%;
  font-size: 1.5rem;
  color: #b3b3b3;
}

.ContactsSearchBox__input:focus {
  outline: 0;
}
</style>
