<template>
  <li class="ContactsListItem">
    <span class="ContactsListItem__lastName">{{ lastName }}</span>
    <span class="ContactsListItem__firstName">{{ firstName }}</span>
  </li>
</template>

<script>
import { head, last, split } from 'ramda';

const firstWord = value => head(split(' ', value));
const lastWord = value => last(split(' ', value));

export default {
  name: 'ContactsListItem',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    firstName() {
      return firstWord(this.name);
    },
    lastName() {
      return lastWord(this.name);
    },
  },
};
</script>

<style scoped>
.ContactsListItem {
  padding: 0 2rem;
  line-height: 2.625rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.ContactsListItem:hover,
.ContactsListItem.ContactsListItem--selected {
  background-color: #e6e6e6;
}

.ContactsListItem__lastName {
  font-weight: bold;
}

.ContactsListItem__lastName::after {
  content: ',';
}
</style>
