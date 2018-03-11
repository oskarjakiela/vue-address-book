<template>
  <div class="ContactsShow">
    <ContactsDetails :contact="contact" />
  </div>
</template>

<script>
import { find, propEq } from 'ramda';
import { mapGetters } from 'vuex';
import ContactsDetails from '@/components/ContactsDetails';

export default {
  name: 'ContactsShow',
  components: {
    ContactsDetails,
  },
  computed: {
    contact() {
      const { contacts, id } = this;
      return find(propEq('id', id))(contacts);
    },

    ...mapGetters(['contacts']),
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.ContactsShow {
  padding: 8rem 10rem;
}
</style>
