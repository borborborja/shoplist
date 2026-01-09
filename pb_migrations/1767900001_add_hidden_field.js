/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db);

    const categories = dao.findCollectionByNameOrId("catalog_categories");
    categories.schema.addField(new SchemaField({
        "name": "hidden",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
    }));
    dao.saveCollection(categories);

    const items = dao.findCollectionByNameOrId("catalog_items");
    items.schema.addField(new SchemaField({
        "name": "hidden",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
    }));
    dao.saveCollection(items);

}, (db) => {
    const dao = new Dao(db);

    const categories = dao.findCollectionByNameOrId("catalog_categories");
    categories.schema.removeField("hidden");
    dao.saveCollection(categories);

    const items = dao.findCollectionByNameOrId("catalog_items");
    items.schema.removeField("hidden");
    dao.saveCollection(items);
})
