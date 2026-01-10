migrate((db) => {
    const collection = new Collection({
        "name": "shopping_items",
        "type": "base",
        "system": false,
        "schema": [
            {
                "system": false,
                "id": "rel_list",
                "name": "list",
                "type": "relation",
                "required": true,
                "presentable": false,
                "unique": false,
                "options": {
                    "collectionId": "", // will be filled dynamically if needed, but usually by name
                    "cascadeDelete": true,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": null
                }
            },
            {
                "system": false,
                "id": "fld_name",
                "name": "name",
                "type": "text",
                "required": true,
                "presentable": true,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "system": false,
                "id": "fld_cat",
                "name": "category",
                "type": "text",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "system": false,
                "id": "fld_checked",
                "name": "checked",
                "type": "bool",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {}
            },
            {
                "system": false,
                "id": "fld_note",
                "name": "note",
                "type": "text",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
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

    // Find the shopping_lists collection to link relation properly
    const dao = new Dao(db);
    const lists = dao.findCollectionByNameOrId("shopping_lists");
    const listField = collection.schema.getFieldByName('list');
    listField.options.collectionId = lists.id;

    return dao.saveCollection(collection);
}, (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("shopping_items");
    return dao.deleteCollection(collection);
})
