# Getting Started with Vite

This project was bootstrapped with [Vite](https://vitejs.dev/)
The package manager used for this project has been [pnpm]('https://pnpm.io/es/') 📦 (recommended to get faste compilation)

## Available Scripts

In the project directory, you can run:

### `npm  start` or `pnpm  start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test` or `pnpm test`

Launches the test runner in watchMode = false.\
See the section about [running tests](https://vitest.dev/api/) for more information.

For testing I have followed a small approach to use: 

- Unit test with [jest](https://jestjs.io/es-ES/)
- Component test with [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

If I had had more time i would have included some kind of e2e test like:

- [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/)

### `npm run build`

simply run the vite build command. By default, it uses <root>/index.html as the build entry point, 
and produces an application bundle that is suitable to be served over a static hosting service

See the section about [build](https://vitejs.dev/guide/build.html) for more information.

