import Vue from 'vue';
import ContactsList from '@/components/contacts/List';

describe('ContactsList.vue', () => {
  describe('with empty contacts', () => {
    let vm;

    beforeEach(() => {
      const Constructor = Vue.extend(ContactsList);

      vm = new Constructor({
        propsData: {
          contacts: [],
        },
      }).$mount();
    });

    it('should render correctly', () => {
      expect(vm.$el.querySelectorAll('.ContactsList__list').length).toBe(1);
      expect(vm.$el.querySelectorAll('.ContactsListGroupHeader').length).toBe(0);
      expect(vm.$el.querySelectorAll('.ContactsListItem').length).toBe(0);
    });
  });

  describe('with some contacts', () => {
    let vm;

    beforeEach(() => {
      const Constructor = Vue.extend(ContactsList);

      vm = new Constructor({
        propsData: {
          contacts: [{
            id: '1',
            name: 'Foo Bar',
          }],
        },
      }).$mount();
    });

    it('should render correctly', () => {
      expect(vm.$el.querySelectorAll('.ContactsList__list').length).toBe(1);
      expect(vm.$el.querySelector('.ContactsListGroupHeader').textContent.trim()).toBe('B');
      expect(vm.$el.querySelector('.ContactsListItem').textContent.trim()).toBe('Bar Foo');
    });
  });
});
