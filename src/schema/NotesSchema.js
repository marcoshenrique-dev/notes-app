export default class NotesSchema {
  static schema = {
    name: 'Notas',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      description: 'string',
    },
  };
}
