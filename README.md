# Online Shop - JavaScript FrameWorks CA

![alt](/src/assets/hero.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Summary

This is my first project using any JavaScript Frameworks. While `CRA` at this point in time discontinued, it has still served as a valuable learning platform for using React. In the brief below I've provided context for user stories and requirements provided by Noroff for our assignment.

## Brief

The API you are using for this brief is: https://api.noroff.dev/api/v1/online-shop

You can find individual items by appending a product ID at the end of the API URL e.g. https://api.noroff.dev/api/v1/online-shop/f99cafd2-bd40-4694-8b33-a6052f36b435

You are tasked with build out the following pages for an eCom store:

- Homepage
- Individual product page
- Cart page
- Checkout success page

The Homepage should have a list of all the products. There should be a look-ahead search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.

You pages should use a `<Layout>` component that contains a header and footer. The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.

The individual product page should display data for a single product. There should be an Add to cart button which, upon clicking, adds the product to the cart. The product page should display the title of the product, the description and the image. There should also be reviews listed for the product, if there are any. You should use the discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.

Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

The Checkout success page will display a message to the user notifying them that their order was successful. There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.

There will be a contact page which will contain a contact form with the following fields. There must be form validation:

- Full name (Minimum number of characters is 3, required)
- Subject (Minimum number of characters is 3, required)
- Email (Must be a valid email address, required)
- Body (Minimum number of characters is 3, required)

You will be using React Router to switch between pages.

Your design should be responsive. You are welcome to use a CSS Framework, however, you’re encouraged to design from scratch and use styled-components or CSS Modules.

You are not required to use TypeScript.

Your code is expected to be clean and well-formatted.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

**Note: If root directory does not include `node_modules` you may need to run `npm run build`**

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run docs`

Builds documentation for `jsdocs`.
