/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db);

    // 1. Create catalog_categories
    const categories = new Collection({
        "name": "catalog_categories",
        "type": "base",
        "system": false,
        "schema": [
            {
                "name": "key",
                "type": "text",
                "required": true,
                "unique": true,
                "options": { "pattern": "" }
            },
            {
                "name": "icon",
                "type": "text",
                "required": true,
                "options": { "pattern": "" }
            },
            {
                "name": "order",
                "type": "number",
                "required": false,
                "options": {}
            },
            {
                "name": "name_es",
                "type": "text",
                "required": false,
                "options": { "pattern": "" }
            },
            {
                "name": "name_ca",
                "type": "text",
                "required": false,
                "options": { "pattern": "" }
            },
            {
                "name": "name_en",
                "type": "text",
                "required": false,
                "options": { "pattern": "" }
            },
            {
                "name": "color",
                "type": "text",
                "required": false,
                "options": { "pattern": "" }
            }
        ],
        "listRule": "",
        "viewRule": "",
        "createRule": "",
        "updateRule": "",
        "deleteRule": ""
    });
    dao.saveCollection(categories);

    // 2. Create catalog_items
    const items = new Collection({
        "name": "catalog_items",
        "type": "base",
        "system": false,
        "schema": [
            {
                "name": "category",
                "type": "relation",
                "required": true,
                "options": {
                    "collectionId": categories.id,
                    "cascadeDelete": true,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": []
                }
            },
            {
                "name": "name_es",
                "type": "text",
                "required": false,
                "options": { "pattern": "" }
            },
            {
                "name": "name_ca",
                "type": "text",
                "required": false,
                "options": { "pattern": "" }
            },
            {
                "name": "name_en",
                "type": "text",
                "required": false,
                "options": { "pattern": "" }
            }
        ],
        "listRule": "",
        "viewRule": "",
        "createRule": "",
        "updateRule": "",
        "deleteRule": ""
    });
    dao.saveCollection(items);

}, (db) => {
    const dao = new Dao(db);
    try {
        const items = dao.findCollectionByNameOrId("catalog_items");
        dao.deleteCollection(items);
    } catch (_) { }
    try {
        const categories = dao.findCollectionByNameOrId("catalog_categories");
        dao.deleteCollection(categories);
    } catch (_) { }
})
