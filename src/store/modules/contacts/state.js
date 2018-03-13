import { map } from 'ramda';
import uuid from 'uuid/v1';
import contacts from '@/assets/contacts.json';

export default {
  contacts: map((contact) => {
    /* eslint no-param-reassign: 0 */
    contact.id = uuid();
    return contact;
  })(contacts),
  query: '',
};
