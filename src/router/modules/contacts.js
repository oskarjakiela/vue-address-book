import AppSidebar from '@/components/AppSidebar';
import ContactsSidebar from '@/components/contacts/Sidebar';
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
      components: {
        default: ContactsAdd,
        sidebar: AppSidebar,
      },
    },
    {
      path: ':id',
      name: 'contacts-show',
      components: {
        default: ContactsShow,
        sidebar: ContactsSidebar,
      },
      props: {
        default: true,
        sidebar: false,
      },
    },
    {
      path: ':id/edit',
      name: 'contacts-edit',
      components: {
        default: ContactsEdit,
        sidebar: AppSidebar,
      },
      props: {
        default: true,
        sidebar: false,
      },
    },
  ],
};
