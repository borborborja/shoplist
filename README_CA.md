# ShopList

Una aplicació moderna de llista de la compra "offline-first" construïda amb Vue 3 i PocketBase.

## Característiques

-   **Sincronització en Temps Real**: Sincronitza la teva llista en múltiples dispositius utilitzant PocketBase.
-   **Suport Offline**: Funciona sense connexió a internet. Els canvis se sincronitzen automàticament en tornar a estar online.
-   **Resolució Intel·ligent de Conflictes**: Estratègia "Last Write Wins" per assegurar la consistència de dades entre dispositius.
-   **Afegir Ràpid**: Suggeriments categoritzats per crear llistes ràpidament.
-   **Multi-idioma**: Disponible en Anglès, Castellà i Català.
-   **Temes**: Modes Clar, Fosc i AMOLED (Negre Pur).
-   **Compartir Fàcil**: Comparteix el teu codi de llista per WhatsApp amb un sol clic. Inclou enllaç d'auto-configuració!
-   **PWA Ready**: Instal·lable en dispositius mòbils.

## Tecnologies

-   **Frontend**: Vue 3 (Global Build), Tailwind CSS
-   **Backend**: PocketBase (per a sincronització)
-   **Icones**: FontAwesome
-   **Emmagatzematge**: LocalStorage + PocketBase

## Configuració

1.  Clona el repositori.
2.  Obre `index.html` al teu navegador.
3.  Ves a **Ajustos** > **Sync**.
4.  Introdueix la URL del teu PocketBase (ex: `https://la-teva-instancia-pocketbase.com`).
5.  Crea una nova llista o uneix-te a una existent utilitzant un codi.

## Schema de PocketBase

Per utilitzar la sincronització, necessites una col·lecció `shopping_lists` a la teva instància de PocketBase amb el següent esquema:

-   `list_code` (text, unique)
-   `data` (json)

## Llicència

MIT
