/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db);

    // 1. Create the 'spices' category
    // Based on catalog_categories schema
    const categoriesCollection = dao.findCollectionByNameOrId("catalog_categories");

    // Check if exists first? dao.saveRecord will throw if unique constraint violated (key).
    // But since this is a new migration, we assume it runs once.

    // We need to fetch the collection first to make records instances.
    const category = new Record(categoriesCollection);
    category.set("key", "spices");
    category.set("icon", "🧂");
    category.set("name_es", "Especias");
    category.set("name_ca", "Espècies");
    category.set("name_en", "Spices");
    category.set("color", "bg-amber-500"); // Using the solid color class or just text ref? Using what defined in logic.
    // Schema says 'color' is text.
    // The frontend uses bg-amber-500.

    // Calculate order? Default catalog usually has hardcoded order or we can append.
    // Let's set order to something high to be at end, or 12.
    category.set("order", 12);

    dao.saveRecord(category);

    // 2. Add items
    const itemsCollection = dao.findCollectionByNameOrId("catalog_items");
    const catId = category.id;

    const itemsToAdd = [
        { es: 'Curry', ca: 'Curri', en: 'Curry' },
        { es: 'Canela', ca: 'Canyella', en: 'Cinnamon' },
        { es: 'Comino', ca: 'Comí', en: 'Cumin' },
        { es: 'Pimienta Negra', ca: 'Pebre Negre', en: 'Black Pepper' },
        { es: 'Orégano', ca: 'Orenga', en: 'Oregano' },
        { es: 'Pimentón', ca: 'Pebre vermell', en: 'Paprika' },
        { es: 'Tomillo', ca: 'Farigola', en: 'Thyme' },
        { es: 'Romero', ca: 'Romaní', en: 'Rosemary' },
        { es: 'Albahaca', ca: 'Alfàbrega', en: 'Basil' },
        { es: 'Perejil', ca: 'Julivert', en: 'Parsley' },
        { es: 'Sal', ca: 'Sal', en: 'Salt' },
        { es: 'Laurel', ca: 'Llorer', en: 'Bay leaf' },
        { es: 'Ajo en polvo', ca: 'All en pols', en: 'Garlic powder' }
    ];

    itemsToAdd.forEach(itemData => {
        const item = new Record(itemsCollection);
        item.set("category", catId);
        item.set("name_es", itemData.es);
        item.set("name_ca", itemData.ca);
        item.set("name_en", itemData.en);
        dao.saveRecord(item);
    });

}, (db) => {
    const dao = new Dao(db);

    // Down migration: delete created items and category
    try {
        const catRecord = dao.findRecordGivenDB("catalog_categories", "key='spices'"); // Pseudo-query, actually need SQL or loop
        // Find by key
        const result = db.newQuery("SELECT id FROM catalog_categories WHERE key='spices'").findOne();
        if (result) {
            const catId = result["id"];
            // Delete items first? cascadeDelete is true in schema? 
            // Previous migration showed: "cascadeDelete": true for items.
            // So deleting category deletes items.
            const record = dao.findRecordById("catalog_categories", catId);
            dao.deleteRecord(record);
        }
    } catch (e) {
        // limit errors
    }
})
