# React Counter App

This is a simple counter app built using NextJS.

Deployed on: [https://react-counter-mohit.vercel.app/](https://react-counter-mohit.vercel.app/)

How it works:

-   Input field to add value to the counter.
-   The Add Button adds the value to the counter.
-   The Subtract Button subtracts the value from the counter.
-   Count displays the current value of the counter.
-   History shows the values entered and the operation performed.

## How to run the App:

-   Clone the Repository
-   Install dependencies using `npm install` or `pnpm install` or `yarn install`
-   Run the app using `npm run dev` or `pnpm run dev` or `yarn dev`
-   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Built Using NextJS, and TailwindCSS.


# Issues
- Not optimized for large data, the history table doesn't have pagination.
- The history table state is not persistent, it resets on page refresh. Requires local storage to be added.