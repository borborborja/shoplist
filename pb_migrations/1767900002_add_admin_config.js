/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db);

    const collection = new Collection({
        "name": "admin_config",
        "type": "base",
        "schema": [
            {
                "name": "key",
                "type": "text",
                "required": true,
                "unique": true,
                "options": {
                    "min": 1,
                    "max": 50
                }
            },
            {
                "name": "value",
                "type": "text",
                "required": true,
                "options": {
                    "min": 1,
                    "max": 255
                }
            }
        ],
        "listRule": "@request.auth.id != ''",
        "viewRule": "@request.auth.id != ''",
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
    });

    dao.saveCollection(collection);

    // Initial password
    db.newQuery("INSERT INTO admin_config (id, key, value, created, updated) VALUES ('admin_pwd_0001', 'password', 'admin123', '2026-01-09 00:00:00.000Z', '2026-01-09 00:00:00.000Z')").execute();

}, (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("admin_config");
    if (collection) {
        dao.deleteCollection(collection);
    }
})
