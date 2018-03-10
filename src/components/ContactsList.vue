<template>
  <div class="ContactsList">
    <h2 class="ContactsList__header">Contacts</h2>

    <ul class="ContactsList__list">
      <contacts-list-group v-for="(contacts, groupName) in groupedContacts"
        :key="groupName"
        :contacts="contacts"
        :group-name="groupName"
      />
    </ul>
  </div>
</template>

<script>
import { groupBy, head, pipe, prop, reverse, split } from 'ramda';
import ContactsListGroup from '@/components/ContactsListGroup';

const byFirstLetterOfLastName = groupBy(
  pipe(
    prop('name'),
    split(' '),
    reverse,
    head,
    head,
  ),
);

export default {
  name: 'ContactsList',
  components: {
    ContactsListGroup,
  },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
    groupBy: {
      type: Function,
      default: byFirstLetterOfLastName,
    },
  },
  computed: {
    groupedContacts() {
      return this.groupBy(this.contacts);
    },
  },
};
</script>

<style>
.ContactsList__header {
  padding: 0 1.75rem;
  font-size: 3rem;
  font-weight: bold;
  color: #5d647a;
}

.ContactsList__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
