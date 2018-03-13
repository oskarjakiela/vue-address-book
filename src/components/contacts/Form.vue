<template>
  <form class="ContactsForm" @submit.prevent="onSubmit(form)">
    <header class="ContactsForm__header">
      <StyledIcon size="130">
        <IconUser />
      </StyledIcon>

      <StyledInput
        large
        type="text"
        name="Name"
        :value="form.name"
        @input.native="onInputName($event.target.value)"
      />
    </header>

    <main class="ContactsForm__body">
      <div
        class="ContactsForm__input-group"
        v-for="({ name, value }, index) in form.fields"
        :key="index"
      >
        <StyledLabel :for="name">
          {{ name }}
        </StyledLabel>

        <StyledInput
          type="text"
          :name="name"
          :value="value"
          @input.native="onInputField(index, $event.target.value)"
        />
      </div>
    </main>

    <StyledButton
      full-width
      sticky
    >
      {{ submitButtonText }}
    </StyledButton>
  </form>
</template>

<script>
import { clone } from 'ramda';
import StyledButton from '@/components/styled/Button';
import StyledIcon from '@/components/styled/Icon';
import StyledInput from '@/components/styled/Input';
import StyledLabel from '@/components/styled/Label';
import IconUser from '@/assets/IconUser.svg';

export default {
  name: 'ContactsForm',
  components: {
    IconUser,
    StyledButton,
    StyledIcon,
    StyledInput,
    StyledLabel,
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
    submitButtonText: {
      type: String,
      default: 'Save Changes',
    },
    onSubmit: {
      type: Function,
    },
  },
  data() {
    const form = clone(this.contact);
    return { form };
  },
  methods: {
    onInputName(name) {
      this.form.name = name;
    },
    onInputField(index, value) {
      this.form.fields[index].value = value;
    },
  },
};
</script>

<style>
.ContactsForm {
  position: relative;
  padding: 8rem 10rem;
  height: 100%;
}

.ContactsForm__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ContactsForm__header input {
  margin-right: 0;
  margin-left: 3rem;
}

.ContactsForm__body {
  padding: 5.5rem 8.125rem 0;
}

.ContactsForm__input-group {
  padding-bottom: .75rem;
}
</style>
