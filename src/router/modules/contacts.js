import ContactsAdd from '@/views/contacts/Add';
import ContactsEdit from '@/views/contacts/Edit';
import ContactsHome from '@/views/contacts/Home';
import ContactsShow from '@/views/contacts/Show';

export default {
  path: '/contacts',
  name: 'contacts-home',
  component: ContactsHome,
  children: [
    {
      path: 'add',
      name: 'contacts-add',
      component: ContactsAdd,
    },
    {
      path: ':id',
      name: 'contacts-show',
      component: ContactsShow,
      props: true,
    },
    {
      path: ':id/edit',
      name: 'contacts-edit',
      component: ContactsEdit,
      props: true,
    },
  ],
};
