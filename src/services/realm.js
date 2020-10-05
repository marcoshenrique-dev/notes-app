import Realm from 'realm';

import NotesSchema from '../schema/NotesSchema';

export default function getRealm() {
  return Realm.open({
    schema: [NotesSchema],
  });
}
