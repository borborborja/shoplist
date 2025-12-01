# ShopList

Una aplicación moderna de lista de la compra "offline-first" construida con Vue 3 y PocketBase.

## Características

-   **Sincronización en Tiempo Real**: Sincroniza tu lista en múltiples dispositivos usando PocketBase.
-   **Soporte Offline**: Funciona sin conexión a internet. Los cambios se sincronizan automáticamente al volver a estar online.
-   **Resolución Inteligente de Conflictos**: Estrategia "Last Write Wins" para asegurar la consistencia de datos entre dispositivos.
-   **Añadido Rápido**: Sugerencias categorizadas para crear listas rápidamente.
-   **Multi-idioma**: Disponible en Inglés, Español y Catalán.
-   **Temas**: Modos Claro, Oscuro y AMOLED (Negro Puro).
-   **Compartir Fácil**: Comparte tu código de lista por WhatsApp con un solo clic. ¡Incluye enlace de auto-configuración!
-   **PWA Ready**: Instalable en dispositivos móviles.

## Tecnologías

-   **Frontend**: Vue 3 (Global Build), Tailwind CSS
-   **Backend**: PocketBase (para sincronización)
-   **Iconos**: FontAwesome
-   **Almacenamiento**: LocalStorage + PocketBase

## Configuración

1.  Clona el repositorio.
2.  Abre `index.html` en tu navegador.
3.  Ve a **Ajustes** > **Sync**.
4.  Introduce la URL de tu PocketBase (ej: `https://tu-instancia-pocketbase.com`).
5.  Crea una nueva lista o únete a una existente usando un código.

## Schema de PocketBase

Para usar la sincronización, necesitas una colección `shopping_lists` en tu instancia de PocketBase con el siguiente esquema:

-   `list_code` (text, unique)
-   `data` (json)

## Licencia

MIT
