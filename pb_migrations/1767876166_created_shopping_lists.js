/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pssil3gepyocice",
    "created": "2026-01-08 12:42:46.113Z",
    "updated": "2026-01-08 12:42:46.113Z",
    "name": "shopping_lists",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hoss5xmz",
        "name": "list_code",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ufufjebu",
        "name": "data",
        "type": "json",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pssil3gepyocice");

  return dao.deleteCollection(collection);
})
