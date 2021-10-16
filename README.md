# React-Routing

## Instructions

Fork [this repo](https://github.com/JoinCODED/Task-React-Routing) and clone

### 1. Setup

1. Install react-router and react-router-dom `yarn add react-router react-router-dom`
2. In index.js `import { BrowserRouter } from "react-router-dom";`
3. Wrap the App component with BrowserRouter.

### 2. Home and List Routes

1. In App.js, `import { Route, Switch } from "react-router";`
2. wrap each compoenent with Route and add exact paths to each one
3. warp all components with Switch.
4. test if everyting is working well

### 3. NavBar UI

1. create a NavBar component
2. `import { Link } from "react-router-dom";`
3. add Links to redirect you to other components in the app (list, home)

### 4. Details

1. add Details component to your App.js and wrap it in Route
2. the path for this Detail component has to have an id as a param
3. in ProductItem component wrap the image with a link to take you to the detail component, you should send the id in the path
4. in detail component get the id from the params and find the cookie using its id

### 5.Something very kash5a, yet very very easy 😎 Logo

1. add a logo to your app in the Navbar and place it in the top left
2. clicking on the logo should always redirect you to home !

### Challenge

Right now, your browser tab title is not changing. Make it so that all your pages have a title. HINT: use React Helmet.
