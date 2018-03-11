<template>
  <div class="ContactsDetails">
    <header class="ContactsDetails__header">
      <IconUser width="167" height="130" />
      <h1 class="ContactsDetails__name">
        {{ contact.name }}
      </h1>
      <IconEdit width="80" height="62" />
      <IconRemove width="80" height="62" />
    </header>

    <main class="ContactsDetails__body">
      <dl class="ContactsDetails__fields-list">
        <template v-for="field in contact.fields">
          <dt class="ContactsDetails__field-name" :key="field.name">{{ field.name }}</dt>
          <dd class="ContactsDetails__field-value" :key="field.value">{{ field.value }}</dd>
        </template>
      </dl>
    </main>
  </div>
</template>

<script>
import IconEdit from '@/assets/IconEdit.svg';
import IconRemove from '@/assets/IconRemove.svg';
import IconUser from '@/assets/IconUser.svg';

export default {
  name: 'ContactsDetails',
  components: {
    IconEdit,
    IconRemove,
    IconUser,
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.ContactsDetails {
}

.ContactsDetails__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ContactsDetails__header h1 {
  margin: 0;
  padding-left: 5.5rem;
  width: 100%;
  font-size: 4.5rem;
}

.ContactsDetails__header svg {
  margin: 0 .5rem;
}

.ContactsDetails__header *:first-child {
  margin-left: 0;
}

.ContactsDetails__header *:last-child {
  margin-right: 0;
}

.ContactsDetails__body {
  padding: 5.5rem 8.125rem;
}

.ContactsDetails__field-name,
.ContactsDetails__field-value {
  font-size: 1.5rem;
  font-weight: bold;
}

.ContactsDetails__field-name {
  line-height: 2rem;
  color: #8f94a3;
}

.ContactsDetails__field-value {
  margin: 0 0 1rem;
  line-height: 2.875rem;
}
</style>
