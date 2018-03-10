<template>
  <div class="ContactsList">
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
.ContactsList__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
