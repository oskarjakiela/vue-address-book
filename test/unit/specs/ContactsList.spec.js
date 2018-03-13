import Vue from 'vue';
import ContactsList from '@/components/contacts/List';

describe('ContactsList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ContactsList);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('.ContactsList h2').textContent)
      .toEqual('Contacts');
  });
});
