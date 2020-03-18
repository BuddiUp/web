## Table of Contents

* [About the Project](#about)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Working with your own API](#working-with-your-own-api)


# BuddiUp - Web Application
![refergg](https://media.giphy.com/media/ehItJrO23KHESUBNdi/giphy.gif)

## About
###### Please note that this project is still **early** in development. 
BuddiUp is a platform that allows users to easily find others with similar interests and connect together. This platform provides a solution for the difficulty of forging interpersonal relationships in modern adult life. People are busier than ever and the need for productivity often outways the willingness to participate in the traditional activities necessary for making new friendships.

View the site live [here](https://www.buddiup.co/).

## Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux Persist](https://github.com/rt2zz/redux-persist)
* [Axios](https://www.npmjs.com/package/axios)
* [Formik](https://jaredpalmer.com/formik)
* [Yup](https://github.com/jquense/yup)
* [Styled Components](https://styled-components.com/)
* [Antd for icons](https://ant.design/)
* [VantaJS](https://www.vantajs.com/)
* [Slick for React](https://www.npmjs.com/package/react-slick)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Prerequisites
If you haven't already, install [NodeJS](https://nodejs.org/en/download/).

You should be able to run the following commands if you installed it properly:

```
node --version

npm --version
```

### Installation
#####  ❗️Note that this application is only the front-end. There will be broken features if you do not have the back-end application which you can find [here](https://github.com/BuddiUp/backend). You must run both in order to get the full experience.❗️

1. Clone the repository

```
git clone https://github.com/BuddiUp/web.git
```

2. Navigate into the correct directory

```
cd (CLONE DIRECTORY)
```

3. You now need to install all of the necessary packages for the project, type the following in your terminal:

```
npm install
```

4. In the project directory run:

```
npm start
```

## Working with your own API
If you would like to implement your own custom API on your local machine follow these instructions to get started.

1. Navigate into the ```apis/``` directory and locate ```buddiup.js```
	1. Replace the ```baseURL```with the url to your API. Refer to the [axios](https://github.com/axios/axios) documentation to explore other configs if needed.
	```javascript
	export default axios.create({
       baseURL: 'YOUR_URL'
	});
	```
	
2. Navigate into the ```store/actions/``` directory and locate the actions.

	3. If you renamed the file in ```step 1``` you will have to adjust the import name in the following files: ```action.auth.js``` ```action.discover.js``` ```action.profile.js```

	3. Replace the routing in each request to your project's routes.
	The following example and code snippet can be found in ```store/actions/action.auth.js```:
	```javascript
	buddiup
        .post('YOUR_ROUTE')
        .then((res) => {
        	  ...your stuff
            dispatch(authSuccess(res.data));
            history.push('/');
        })
        .catch((err) => {
            dispatch(authFail(err));
        });
	```
3. Repeat ```step 2``` where appropriate.
