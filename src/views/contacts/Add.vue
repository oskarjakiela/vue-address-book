<template>
  <div class="ContactsAdd">
    <ContactsForm
      submit-button-text="Add Contact"
      :contact="contact"
      :on-submit="onSubmit"
    />
  </div>
</template>

<script>
import uuid from 'uuid/v1';
import { mapActions } from 'vuex';
import ContactsForm from '@/components/contacts/Form';

export default {
  name: 'ContactsAdd',
  components: {
    ContactsForm,
  },
  data() {
    return {
      contact: {
        id: uuid(),
        name: '',
        fields: [{
          name: 'Email',
          value: '',
        }, {
          name: 'Mobile',
          value: '',
        }],
      },
    };
  },
  methods: {
    onSubmit(contact) {
      const { id } = this.contact;
      this.addContact(contact);
      this.$router.push({ name: 'contacts-show', params: { id } });
    },
    ...mapActions(['addContact']),
  },
};
</script>

<style scoped>
.ContactsAdd {
  height: 100%;
}
</style>
