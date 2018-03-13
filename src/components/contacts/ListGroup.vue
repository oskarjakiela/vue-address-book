<template>
  <li class="ContactsListGroup">
    <contacts-list-group-header :header="groupName" />

    <ul class="ContactsListGroup__list">
      <contacts-list-item
        v-for="contact in contacts"
        :key="contact.id"
        :name="contact.name"
        :id="contact.id"
      />
    </ul>
  </li>
</template>

<script>
import ContactsListGroupHeader from '@/components/contacts/ListGroupHeader';
import ContactsListItem from '@/components/contacts/ListItem';

export default {
  name: 'ContactsListGroup',
  components: {
    ContactsListItem,
    ContactsListGroupHeader,
  },
  props: {
    groupName: {
      type: String,
      required: true,
    },
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.ContactsListGroup {
}

.ContactsListGroup__list {
  margin: 0;
  margin-bottom: .75rem;
  padding: 0;
  list-style: none;
}
</style>
