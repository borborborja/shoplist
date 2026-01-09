import type { Categories } from "../types";

export const translations = {
    es: { appTitle: 'ShopList', placeholder: 'Añadir producto...', quickAdd: 'Añadir Rápidamente', myList: 'Mi Lista', clearComp: 'Limpiar', empty: 'Tu lista está vacía', settings: 'Ajustes', data: 'Backup', export: 'Exportar', import: 'Importar', notes: 'Notas', saveNote: 'Guardar', add: 'Añadir', cats: { fruit: 'Fruta', veg: 'Verdura', meat: 'Carne/Pescado', dairy: 'Lácteos', pantry: 'Despensa/Pan', cleaning: 'Higiene/Limpieza', home: 'Hogar', snacks: 'Snacks/Dulces', frozen: 'Congelados', processed: 'Procesados', drinks: 'Bebidas', other: 'General/Otros' }, resetBtn: 'Restaurar de Fábrica', completed: 'Completados', progress: 'Progreso', cancel: 'Cancelar', sync: 'Sincronización', createList: 'Crear Lista', join: 'Unirse', disconnect: 'Desconectar', modePlan: 'Planificador', modeShop: 'Comprar', manageCatalog: 'Gestión de Productos', tabAccount: 'Cuenta', tabProducts: 'Productos', tabOther: 'Otros', email: 'Email', password: 'Contraseña', passwordConfirm: 'Confirmar Contraseña', login: 'Entrar', register: 'Registrar', loggedAs: 'Conectado como', newCategory: 'Nueva Categoría', categoryName: 'Nombre', categoryIcon: 'Emoji', deleteCategory: 'Eliminar Categoría', syncMergeTitle: 'Lista encontrada', syncMerge: 'Combinar', syncReplace: 'Reemplazar', notifyAdd: 'Avisos nuevos productos', notifyCheck: 'Avisos productos comprados', installApp: 'Instalar App', syncHistory: 'Historial de Listas', admin: 'Admin Panel', tabLists: 'Listas', tabCategories: 'Categorías', logout: 'Salir' },
    ca: { appTitle: 'ShopList', placeholder: 'Afegir producte...', quickAdd: 'Afegir Ràpidament', myList: 'La Meva Llista', clearComp: 'Netejar', empty: 'La teva llista està buida', settings: 'Ajustos', data: 'Còpia', export: 'Exportar', import: 'Importar', notes: 'Notes', saveNote: 'Guardar', add: 'Afegir', cats: { fruit: 'Fruita', veg: 'Verdura', meat: 'Carn/Peix', dairy: 'Làctics', pantry: 'Rebost/Pa', cleaning: 'Higiene/Neteja', home: 'Llar', snacks: 'Snacks/Dolços', frozen: 'Congelats', processed: 'Processats', drinks: 'Begudes', other: 'General/Altres' }, resetBtn: 'Restaurar de Fàbrica', completed: 'Completats', progress: 'Progrés', cancel: 'Cancel·lar', sync: 'Sincronització', createList: 'Crear Llista', join: 'Unir-se', disconnect: 'Desconnectar', modePlan: 'Planificador', modeShop: 'Comprar', manageCatalog: 'Gestió de Productes', tabAccount: 'Compte', tabProducts: 'Productes', tabOther: 'Altres', email: 'Email', password: 'Contrasenya', passwordConfirm: 'Confirmar Contrasenya', login: 'Entrar', register: 'Registrar', loggedAs: 'Connectat com', newCategory: 'Nova Categoria', categoryName: 'Nom', categoryIcon: 'Emoji', deleteCategory: 'Eliminar Categoria', syncMergeTitle: 'Llista trobada', syncMerge: 'Combinar', syncReplace: 'Reemplaçar', notifyAdd: 'Avisos nous productes', notifyCheck: 'Avisos productes comprats', installApp: 'Instal·lar App', syncHistory: 'Historial de Llistes', admin: 'Admin Panel', tabLists: 'Llistes', tabCategories: 'Categories', logout: 'Sortir' },
    en: { appTitle: 'ShopList', placeholder: 'Add product...', quickAdd: 'Quick Add', myList: 'My List', clearComp: 'Clear', empty: 'Your list is empty', settings: 'Settings', data: 'Backup', export: 'Export', import: 'Import', notes: 'Notes', saveNote: 'Save', add: 'Add', cats: { fruit: 'Fruit', veg: 'Veg', meat: 'Meat/Fish', dairy: 'Dairy', pantry: 'Pantry/Bread', cleaning: 'Cleaning/Hygiene', home: 'Home', snacks: 'Snacks/Sweets', frozen: 'Frozen', processed: 'Processed', drinks: 'Drinks', other: 'General/Other' }, resetBtn: 'Factory Reset', completed: 'Completed', progress: 'Progress', cancel: 'Cancel', sync: 'Sync', createList: 'Create List', join: 'Join', disconnect: 'Disconnect', modePlan: 'Plan', modeShop: 'Shop', manageCatalog: 'Manage Products', tabAccount: 'Account', tabProducts: 'Products', tabOther: 'Other', email: 'Email', password: 'Password', passwordConfirm: 'Confirm Password', login: 'Login', register: 'Register', loggedAs: 'Logged as', newCategory: 'New Category', categoryName: 'Name', categoryIcon: 'Emoji', deleteCategory: 'Delete Category', syncMergeTitle: 'List found', syncMerge: 'Merge', syncReplace: 'Replace', notifyAdd: 'Notify on new products', notifyCheck: 'Notify on purchased products', installApp: 'Install App', syncHistory: 'Sync History', admin: 'Admin Panel', tabLists: 'Lists', tabCategories: 'Categories', logout: 'Logout' }
};

export const defaultCategories: Categories = {
    fruit: {
        icon: '🍎',
        items: [
            { es: 'Manzanas', ca: 'Pomes', en: 'Apples' },
            { es: 'Plátanos', ca: 'Plàtans', en: 'Bananas' },
            { es: 'Naranjas', ca: 'Taronges', en: 'Oranges' },
            { es: 'Peras', ca: 'Peres', en: 'Pears' },
            { es: 'Fresas', ca: 'Sindries', en: 'Strawberries' },
            { es: 'Uvas', ca: 'Raïm', en: 'Grapes' },
            { es: 'Limones', ca: 'Llimones', en: 'Lemons' },
            { es: 'Mandarinas', ca: 'Mandarines', en: 'Tangerines' },
            { es: 'Melón', ca: 'Meló', en: 'Melon' },
            { es: 'Sandía', ca: 'Síndria', en: 'Watermelon' },
            { es: 'Piña', ca: 'Pinya', en: 'Pineapple' },
            { es: 'Kiwi', ca: 'Kiwi', en: 'Kiwi' },
            { es: 'Melocotón', ca: 'Préssec', en: 'Peach' },
            { es: 'Cerezas', ca: 'Cireres', en: 'Cherries' },
            { es: 'Ciruelas', ca: 'Prunes', en: 'Plums' },
            { es: 'Aguacate', ca: 'Alvocat', en: 'Avocado' },
            { es: 'Pomelo', ca: 'Pomelo', en: 'Grapefruit' },
            { es: 'Higos', ca: 'Figues', en: 'Figs' },
            { es: 'Mango', ca: 'Mango', en: 'Mango' },
            { es: 'Papaya', ca: 'Papaya', en: 'Papaya' }
        ]
    },
    veg: {
        icon: '🥦',
        items: [
            { es: 'Lechuga', ca: 'Enciam', en: 'Lettuce' },
            { es: 'Tomates', ca: 'Tomàquets', en: 'Tomatoes' },
            { es: 'Cebollas', ca: 'Cebes', en: 'Onions' },
            { es: 'Patatas', ca: 'Patates', en: 'Potatoes' },
            { es: 'Zanahorias', ca: 'Pastanagues', en: 'Carrots' },
            { es: 'Pimientos', ca: 'Pebrots', en: 'Peppers' },
            { es: 'Calabacín', ca: 'Carbassó', en: 'Zucchini' },
            { es: 'Berenjena', ca: 'Albergínia', en: 'Eggplant' },
            { es: 'Brócoli', ca: 'Bròcoli', en: 'Broccoli' },
            { es: 'Coliflor', ca: 'Coliflor', en: 'Cauliflower' },
            { es: 'Espárragos', ca: 'Espàrrecs', en: 'Asparagus' },
            { es: 'Pepino', ca: 'Pepino', en: 'Cucumber' },
            { es: 'Ajos', ca: 'Alls', en: 'Garlic' },
            { es: 'Espinacas', ca: 'Espinacs', en: 'Spinach' },
            { es: 'Judías verdes', ca: 'Mongetes verdes', en: 'Green beans' },
            { es: 'Champiñones', ca: 'Xampinyons', en: 'Mushrooms' },
            { es: 'Puerros', ca: 'Porros', en: 'Leeks' },
            { es: 'Calabaza', ca: 'Carbassa', en: 'Pumpkin' },
            { es: 'Apio', ca: 'Api', en: 'Celery' },
            { es: 'Rábanos', ca: 'Raves', en: 'Radishes' }
        ]
    },
    meat: {
        icon: '🥩',
        items: [
            { es: 'Pollo', ca: 'Pollastre', en: 'Chicken' },
            { es: 'Ternera', ca: 'Vedella', en: 'Beef' },
            { es: 'Cerdo', ca: 'Porc', en: 'Pork' },
            { es: 'Cordero', ca: 'Xai', en: 'Lamb' },
            { es: 'Pavo', ca: 'Gall dindi', en: 'Turkey' },
            { es: 'Conejo', ca: 'Conill', en: 'Rabbit' },
            { es: 'Salchichas', ca: 'Salsitxes', en: 'Sausages' },
            { es: 'Bacon', ca: 'Bacon', en: 'Bacon' },
            { es: 'Jamón York', ca: 'Pernil dolç', en: 'Ham' },
            { es: 'Jamón Serrano', ca: 'Pernil quadrat', en: 'Serrano Ham' },
            { es: 'Chorizo', ca: 'Xoriço', en: 'Chorizo' },
            { es: 'Lomo', ca: 'Llonguet', en: 'Pork loin' },
            { es: 'Pescado blanco', ca: 'Peix blanc', en: 'White fish' },
            { es: 'Salmón', ca: 'Salmó', en: 'Salmon' },
            { es: 'Atún fresco', ca: 'Tonyina fresca', en: 'Fresh tuna' },
            { es: 'Gambas', ca: 'Gambes', en: 'Shrimp' },
            { es: 'Mejillones', ca: 'Musclos', en: 'Mussels' },
            { es: 'Calamares', ca: 'Calamars', en: 'Squid' },
            { es: 'Bacalao', ca: 'Bacallà', en: 'Cod' },
            { es: 'Carne picada', ca: 'Carn picada', en: 'Minced meat' }
        ]
    },
    dairy: {
        icon: '🧀',
        items: [
            { es: 'Leche', ca: 'Llet', en: 'Milk' },
            { es: 'Queso', ca: 'Formatge', en: 'Cheese' },
            { es: 'Yogur', ca: 'Iogurt', en: 'Yogurt' },
            { es: 'Mantequilla', ca: 'Mantega', en: 'Butter' },
            { es: 'Nata', ca: 'Nata', en: 'Cream' },
            { es: 'Huevos', ca: 'Ous', en: 'Eggs' },
            { es: 'Queso rallado', ca: 'Formatge ratllat', en: 'Grated cheese' },
            { es: 'Leche de avena', ca: 'Llet d\'avena', en: 'Oat milk' },
            { es: 'Leche de soja', ca: 'Llet de soja', en: 'Soy milk' },
            { es: 'Margarina', ca: 'Margarina', en: 'Margarine' },
            { es: 'Kefir', ca: 'Kefir', en: 'Kefir' },
            { es: 'Queso crema', ca: 'Formatge crema', en: 'Cream cheese' },
            { es: 'Requesón', ca: 'Recuit', en: 'Cottage cheese' },
            { es: 'Flan', ca: 'Flams', en: 'Flan' },
            { es: 'Natillas', ca: 'Natilles', en: 'Custard' }
        ]
    },
    pantry: {
        icon: '🍝',
        items: [
            { es: 'Pan', ca: 'Pa', en: 'Bread' },
            { es: 'Arroz', ca: 'Arròs', en: 'Rice' },
            { es: 'Pasta', ca: 'Pasta', en: 'Pasta' },
            { es: 'Aceite', ca: 'Oli', en: 'Oil' },
            { es: 'Vinagre', ca: 'Vinagre', en: 'Vinegar' },
            { es: 'Sal', ca: 'Sal', en: 'Salt' },
            { es: 'Azúcar', ca: 'Sucre', en: 'Sugar' },
            { es: 'Harina', ca: 'Farina', en: 'Flour' },
            { es: 'Café', ca: 'Cafè', en: 'Coffee' },
            { es: 'Té', ca: 'Te', en: 'Tea' },
            { es: 'Cereales', ca: 'Cereals', en: 'Cereals' },
            { es: 'Galletas', ca: 'Galetes', en: 'Cookies' },
            { es: 'Atún lata', ca: 'Tonyina llauna', en: 'Canned tuna' },
            { es: 'Tomate frito', ca: 'Tomàquet fregit', en: 'Tomato sauce' },
            { es: 'Legumbres', ca: 'Llegums', en: 'Legumes' },
            { es: 'Lentejas', ca: 'Llenties', en: 'Lentils' },
            { es: 'Garbanzos', ca: 'Garbanços', en: 'Chickpeas' },
            { es: 'Mermelada', ca: 'Melmelada', en: 'Jam' },
            { es: 'Miel', ca: 'Mel', en: 'Honey' },
            { es: 'Caldo', ca: 'Brou', en: 'Broth' },
            { es: 'Especias', ca: 'Espècies', en: 'Spices' },
            { es: 'Frutos secos', ca: 'Fruits secs', en: 'Nuts' },
            { es: 'Pan de molde', ca: 'Pa de molde', en: 'Sliced bread' }
        ]
    },
    cleaning: {
        icon: '🧼',
        items: [
            { es: 'Detergente', ca: 'Detergent', en: 'Detergent' },
            { es: 'Papel WC', ca: 'Paper WC', en: 'Toilet Paper' },
            { es: 'Suavizante', ca: 'Suavitzant', en: 'Fabric softener' },
            { es: 'Lavavajillas', ca: 'Rentaplats', en: 'Dish soap' },
            { es: 'Lejía', ca: 'Lleixiu', en: 'Bleach' },
            { es: 'Limpiacristales', ca: 'Netejacristalls', en: 'Glass cleaner' },
            { es: 'Multiúsos', ca: 'Multiusos', en: 'All-purpose cleaner' },
            { es: 'Estropajos', ca: 'Fregalls', en: 'Scouring pads' },
            { es: 'Bayetas', ca: 'Baietes', en: 'Cleaning cloths' },
            { es: 'Bolsas basura', ca: 'Bosses escombraries', en: 'Trash bags' },
            { es: 'Champú', ca: 'Xampú', en: 'Shampoo' },
            { es: 'Gel de baño', ca: 'Gel de bany', en: 'Shower gel' },
            { es: 'Pasta de dientes', ca: 'Pasta de dents', en: 'Toothpaste' },
            { es: 'Desodorante', ca: 'Desodorant', en: 'Deodorant' },
            { es: 'Papel cocina', ca: 'Paper cuina', en: 'Kitchen paper' },
            { es: 'Servilletas', ca: 'Torallons', en: 'Napkins' },
            { es: 'Compresas', ca: 'Compreses', en: 'Pads' },
            { es: 'Pañuelos', ca: 'Mocadors', en: 'Tissues' }
        ]
    },
    home: {
        icon: '🏠',
        items: [
            { es: 'Pilas', ca: 'Piles', en: 'Batteries' },
            { es: 'Bombillas', ca: 'Bombetes', en: 'Light bulbs' },
            { es: 'Papel aluminio', ca: 'Paper alumini', en: 'Aluminum foil' },
            { es: 'Film transparente', ca: 'Film transparent', en: 'Plastic wrap' },
            { es: 'Velas', ca: 'Espelmes', en: 'Candles' },
            { es: 'Cerillas', ca: 'Mistus', en: 'Matches' },
            { es: 'Cinta adhesiva', ca: 'Cinta adhesiva', en: 'Adhesive tape' },
            { es: 'Filtros café', ca: 'Filtres cafè', en: 'Coffee filters' }
        ]
    },
    snacks: {
        icon: '🍪',
        items: [
            { es: 'Chocolate', ca: 'Xocolata', en: 'Chocolate' },
            { es: 'Patatas Chips', ca: 'Patates Xips', en: 'Chips' },
            { es: 'Gominolas', ca: 'Llacrimons', en: 'Gummy candies' },
            { es: 'Aceitunas', ca: 'Olives', en: 'Olives' },
            { es: 'Palomitas', ca: 'Crispetes', en: 'Popcorn' },
            { es: 'Tortitas de arroz', ca: 'Tortitas d\'arròs', en: 'Rice cakes' },
            { es: 'Barritas cereales', ca: 'Barretes cereals', en: 'Cereal bars' },
            { es: 'Helado', ca: 'Gelat', en: 'Ice cream' }
        ]
    },
    frozen: {
        icon: '🧊',
        items: [
            { es: 'Helado', ca: 'Gelat', en: 'Ice Cream' },
            { es: 'Pizza congelada', ca: 'Pizza congelada', en: 'Frozen pizza' },
            { es: 'Guisantes congeladores', ca: 'Pèsols congelats', en: 'Frozen peas' },
            { es: 'Patatas fritas', ca: 'Patates fregides', en: 'French fries' },
            { es: 'Pescado congelado', ca: 'Peix congelat', en: 'Frozen fish' },
            { es: 'Verdura congelada', ca: 'Verdura congelada', en: 'Frozen vegetables' },
            { es: 'Croquetas', ca: 'Croquetes', en: 'Croquettes' },
            { es: 'Cannelones', ca: 'Canelons', en: 'Cannelloni' }
        ]
    },
    processed: {
        icon: '🍕',
        items: [
            { es: 'Pizza Fresca', ca: 'Pizza Fresca', en: 'Fresh Pizza' },
            { es: 'Gazpacho', ca: 'Gaspatxo', en: 'Gazpacho' },
            { es: 'Hummus', ca: 'Hummus', en: 'Hummus' },
            { es: 'Guacamole', ca: 'Guacamole', en: 'Guacamole' },
            { es: 'Platos preparados', ca: 'Plats preparats', en: 'Ready meals' },
            { es: 'Masa de hojaldre', ca: 'Massa de full', en: 'Puff pastry' },
            { es: 'Masa de pizza', ca: 'Massa de pizza', en: 'Pizza dough' }
        ]
    },
    drinks: {
        icon: '🍷',
        items: [
            { es: 'Agua', ca: 'Aigua', en: 'Water' },
            { es: 'Vino', ca: 'Vi', en: 'Wine' },
            { es: 'Cerveza', ca: 'Cervesa', en: 'Beer' },
            { es: 'Refrescos', ca: 'Refrescos', en: 'Soft drinks' },
            { es: 'Zumo', ca: 'Suc', en: 'Juice' },
            { es: 'Leche', ca: 'Llet', en: 'Milk' },
            { es: 'Batidos', ca: 'Batuts', en: 'Milkshakes' },
            { es: 'Tónica', ca: 'Tònica', en: 'Tonic water' },
            { es: 'Cava', ca: 'Cava', en: 'Cava' },
            { es: 'Vermut', ca: 'Vermut', en: 'Vermouth' },
            { es: 'Isotónicas', ca: 'Isotòniques', en: 'Sports drinks' }
        ]
    },
    other: {
        icon: '📦',
        items: [
            { es: 'Comida gato', ca: 'Menjar gat', en: 'Cat food' },
            { es: 'Comida perro', ca: 'Menjar gos', en: 'Dog food' },
            { es: 'Arena gato', ca: 'Sorra gat', en: 'Cat litter' }
        ]
    }
};

export const categoryStyles: Record<string, { bgSolid: string, active: string, pill: string }> = {
    fruit: { bgSolid: 'bg-red-400', active: 'bg-red-50 dark:bg-red-900/10 text-red-500 dark:text-red-400 border-red-400', pill: 'text-red-600 bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300' },
    veg: { bgSolid: 'bg-green-500', active: 'bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-400 border-green-500', pill: 'text-green-700 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300' },
    meat: { bgSolid: 'bg-rose-500', active: 'bg-rose-50 dark:bg-rose-900/10 text-rose-600 dark:text-rose-400 border-rose-500', pill: 'text-rose-700 bg-rose-50 border-rose-200 dark:bg-rose-900/20 dark:border-rose-800 dark:text-rose-300' },
    dairy: { bgSolid: 'bg-blue-400', active: 'bg-blue-50 dark:bg-blue-900/10 text-blue-500 dark:text-blue-400 border-blue-400', pill: 'text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300' },
    pantry: { bgSolid: 'bg-amber-500', active: 'bg-amber-50 dark:bg-amber-900/10 text-amber-600 dark:text-amber-400 border-amber-500', pill: 'text-amber-700 bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-300' },
    cleaning: { bgSolid: 'bg-cyan-500', active: 'bg-cyan-50 dark:bg-cyan-900/10 text-cyan-600 dark:text-cyan-400 border-cyan-500', pill: 'text-cyan-700 bg-cyan-50 border-cyan-200 dark:bg-cyan-900/20 dark:border-cyan-800 dark:text-cyan-300' },
    home: { bgSolid: 'bg-indigo-500', active: 'bg-indigo-50 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-400 border-indigo-500', pill: 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800 dark:text-indigo-300' },
    snacks: { bgSolid: 'bg-pink-500', active: 'bg-pink-50 dark:bg-pink-900/10 text-pink-600 dark:text-pink-400 border-pink-500', pill: 'text-pink-700 bg-pink-50 border-pink-200 dark:bg-pink-900/20 dark:border-pink-800 dark:text-pink-300' },
    frozen: { bgSolid: 'bg-sky-500', active: 'bg-sky-50 dark:bg-sky-900/10 text-sky-600 dark:text-sky-400 border-sky-500', pill: 'text-sky-700 bg-sky-50 border-sky-200 dark:bg-sky-900/20 dark:border-sky-800 dark:text-sky-300' },
    processed: { bgSolid: 'bg-orange-500', active: 'bg-orange-50 dark:bg-orange-900/10 text-orange-600 dark:text-orange-400 border-orange-500', pill: 'text-orange-700 bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-300' },
    drinks: { bgSolid: 'bg-teal-500', active: 'bg-teal-50 dark:bg-teal-900/10 text-teal-600 dark:text-teal-400 border-teal-500', pill: 'text-teal-700 bg-teal-50 border-teal-200 dark:bg-teal-900/20 dark:border-teal-800 dark:text-teal-300' },
    other: { bgSolid: 'bg-slate-400', active: 'bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-slate-400', pill: 'text-slate-600 bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-300' }
};
