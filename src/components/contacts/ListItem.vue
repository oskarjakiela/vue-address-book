<template>
  <li class="ContactsListItem">
    <router-link class="ContactsListItem__link" :to="to">
      <span class="ContactsListItem__lastName">{{ lastName }}</span>
      <span class="ContactsListItem__firstName">{{ firstName }}</span>
    </router-link>
  </li>
</template>

<script>
import { head, last, split } from 'ramda';

const firstWord = value => head(split(' ', value));
const lastWord = value => last(split(' ', value));

export default {
  name: 'ContactsListItem',
  props: {
    id: {
      type: String,
      required: true,
    },
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
    to() {
      return {
        name: 'contacts-show',
        params: { id: this.id },
      };
    },
  },
};
</script>

<style scoped>
.ContactsListItem {
}

.ContactsListItem__link {
  display: block;
  padding: 0 2rem;
  line-height: 2.625rem;
  font-size: 1.5rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.ContactsListItem__link:hover,
.ContactsListItem__link.is-active {
  background-color: #e6e6e6;
}

.ContactsListItem__lastName {
  font-weight: bold;
}

.ContactsListItem__lastName::after {
  content: ',';
}
</style>
