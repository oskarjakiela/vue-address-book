<template>
  <div class="ContactsShow">
    <ContactsDetails
      :contact="contact"
      :on-remove="onRemove"
    />
  </div>
</template>

<script>
import { dec, equals, find, findIndex, inc, propEq } from 'ramda';
import { mapActions, mapGetters } from 'vuex';
import ContactsDetails from '@/components/ContactsDetails';

export default {
  name: 'ContactsShow',
  components: {
    ContactsDetails,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    contact() {
      const { contacts, id } = this;
      return find(propEq('id', id))(contacts);
    },

    prevId() {
      const { contacts, id } = this;
      const index = findIndex(propEq('id', id))(contacts);
      const prevId = equals(0, index) ? inc(index) : dec(index);
      return contacts[prevId].id;
    },

    ...mapGetters(['contacts']),
  },
  methods: {
    onRemove() {
      const { id, prevId } = this;
      this.removeContact(id);
      this.$router.push({ name: 'contacts-show', params: { id: prevId } });
    },
    ...mapActions(['removeContact']),
  },
};
</script>

<style scoped>
.ContactsShow {
  padding: 8rem 10rem;
}
</style>
