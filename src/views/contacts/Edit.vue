<template>
  <div class="ContactsEdit">
    <ContactsForm
      :contact="contact"
      :on-submit="onSubmit"
    />
  </div>
</template>

<script>
import { find, propEq } from 'ramda';
import { mapActions, mapGetters } from 'vuex';
import ContactsForm from '@/components/contacts/Form';

export default {
  name: 'ContactsEdit',
  components: {
    ContactsForm,
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

    ...mapGetters(['contacts']),
  },
  methods: {
    onSubmit(contact) {
      const { id } = this;
      this.editContact(contact);
      this.$router.push({ name: 'contacts-show', params: { id } });
    },
    ...mapActions(['editContact']),
  },
};
</script>

<style scoped>
.ContactsEdit {
  height: 100%;
}
</style>
