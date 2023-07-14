# Getting Started with Vite

This project was bootstrapped with [Vite](https://vitejs.dev/)
The package manager used for this project has been [pnpm]('https://pnpm.io/es/') 📦 (recommended to get faste compilation)

## Run project 🎮
To execute this project you will need the .env sent in the email, then: 

1) nvm use recommended to use the node version defined (optional)
2) npm or pnpm install
3) npm or pnpm start

## Interesting Libraries Added 📘 

### Dependencies
- [react-query](https://tanstack.com/query/v4/docs/react/overview) ⤵️ : a data-fetching and state management library for React applications that simplifies fetching, caching, and updating data 
- [i18N](https://react.i18next.com/):🗺️  is a powerful internationalization framework used to have all the text reusable and located in the same place 📖
- [react-router](https://reactrouter.com/en/main):🚗 react router provides a declarative way to define the routes in your application, associating each route with a specific component 


### Dev Dependencies

- [commitlint](commitlint helps your team adhere to a commit convention. ) ✔️: commitlint helps your team adhere to a commit convention (executed in commit-msg husky hook 🪝). 
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)🐙: The @testing-library family of packages helps you test UI components in a user-centric way (executed in pre-prush husky hook 🪝)
- vitest 🏗️: package to replace jest when the project is build with vite (executed in pre-prush husky hook 🪝).
- [prettier](https://prettier.io/)🎨: Prettier is an opinionated code formatter used in this case to format the code and no having different styles (executed in pre-commit husky hook 🪝)
- [husky](https://github.com/typicode/husky)🐶: Hook library to execute different command in pre-push, pre-commit, commit-msg...

## Board 🎫

[Board](https://github.com/users/ardguezsoc/projects/3) used for this project 

## Available Scripts 🖥️

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



