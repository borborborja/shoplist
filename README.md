# ShopList

A modern, offline-first shopping list application built with Vue 3 and PocketBase.

![ShopList Screenshot](https://via.placeholder.com/800x400?text=ShopList+Preview)

## Features

-   **Real-time Synchronization**: Sync your list across multiple devices using PocketBase.
-   **Offline Support**: Works without internet connection. Changes sync automatically when online.
-   **Smart Conflict Resolution**: "Last Write Wins" strategy ensures data consistency between devices.
-   **Quick Add**: Categorized suggestions for fast list building.
-   **Multi-language**: Available in English, Spanish, and Catalan.
-   **Theming**: Light, Dark, and AMOLED (Pure Black) modes.
-   **Easy Sharing**: Share your list code via WhatsApp with a single click. Auto-configuration link included!
-   **PWA Ready**: Installable on mobile devices.

## Tech Stack

-   **Frontend**: Vue 3 (Global Build), Tailwind CSS
-   **Backend**: PocketBase (for synchronization)
-   **Icons**: FontAwesome
-   **Storage**: LocalStorage + PocketBase

## Setup

1.  Clone the repository.
2.  Open `index.html` in your browser.
3.  Go to **Settings** > **Sync**.
4.  Enter your PocketBase URL (e.g., `https://your-pocketbase-instance.com`).
5.  Create a new list or join an existing one using a code.

## PocketBase Schema

To use the sync feature, you need a `shopping_lists` collection in your PocketBase instance with the following schema:

-   `list_code` (text, unique)
-   `data` (json)

## License

MIT
