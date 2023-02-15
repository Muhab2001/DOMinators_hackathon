# CAD-next
Frontend source code for Jareed CAD 2.0 for content & Ad management

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 📦 Packages used in the project

- `mantine` comprehensive set of UI library components (supports out-of-the-box dark mode RTL/LTR switching)
> **Note**
> Refer to ['maintine UI'](https://ui.mantine.dev/) website to see the amazing use cases of the package

- `@tabler/icons` modern and elegant icons' set
- `tailwindcss` for quick CSS styling
- `react-query` for server-side state management
- `zustand` for simple immutable global state management, with support to middleware (for example: `immer` for deeply nested objects)
- `firebase` client to connect to the serverless backend
- `axios` fetching library to access endpoints provided by `firebase` cloud functions defined in `amyal-firebase`
- `next-translate` library to facilitate serving translation using the `i18n` standard
- `zod` for schema validation (used for form validation in conjunction with `@mantineforms`)

## 📁 Folder structure
- `clients`: used to provide services from 3rd-party clients like `firebase` and `mailchimp`
- `components`: for reusable `React` components
- `custom_hooks` for custom-made hooks used for wrapping complex local state management hooks
- `globals` used for storing shared `TypeScript` types and other global logic
- `locales` stores translation files used by `next-translate`
- `models` wrappers used to abstract the implentation of the backend models from mthe UI
- `pages` stores the main routes of the application (e.g. `home`, `about`)
- `stores` includes `zustand` global state management stores
- `styles` folder for `css` files
- all other root-level files are configruation files
