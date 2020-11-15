# POS LocalConnect Server

Node based server for Sellerspot Localconnect to coordinate offline communication between POS and local database

## Packaging Instructions:

The node application uses [pkg](https://www.npmjs.com/package/pkg) to package the node application into a standalone executable file.

### Packaging configuration:

- In `package.json`:
  - The `bin` key indicates the **entry point javascript file** of the server. In this case, it is `dist/app.js` after typescript build using `yarn run build`.
  - The `pkg` key is used to add `assets` and `scripts` stored in the `dist/` folder. **Assets and special scripts used by the node application should be mentioned here, or they will not be packaged, causing runtime error**
- To package the application:
  `npx pkg package.json`

### Tray Icon Configuration:

The tray icon and it's configuration can be customized at `src/middlewares/systray.ts`.

## Progress Log

- [x] Creating and setting up server.
- [x] Stable packaging of server into a standalone application.
- [x] Tray icon feature to interact with the server.
