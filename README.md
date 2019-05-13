# Local WhatsApp UI Mockup 
This is a basic WhatsApp UI mockup having search, send and receive message functionality.<br>
This is made on React, Redux, Redux-Saga, Dexie.js and IndexedDB.


## Directory Structure
```
project
│---README.md
│---babel.config.js
|---.eslintrc.js
|---package.json
|---package-lock.json
|
└───src
	│---index.js
	│---App.test.js
	└───actions
	└───components
		│---userStrip.jsx
		│---searchbar.jsx
		|...
	└───constants
	└───containers
		|---App.jsx
		|---userList.jsx
		|---sidebar.jsx
		|...
	└───model
		|---db.js
	└───reducers
	└───saga
	└───services
		|---DBServices.js
	└───store
```

## Getting Started

1. Clone the project.
2. cd into `local-whatsapp-UI`.
3. Run `npm install` and wait for all the dependencies to install.
4. Go to `src->models->db.js` and uncomment the hardcoded values for user when running for the first time.
5. Run `npm start` to start the project.
6. Comment the hardcoded values of user in `src->models->db.js` and save the file.
7. Open [http://localhost:3000](http://localhost:3000) to view in the browser.


## Unit Testing

Unit tests are written for actions, reducers and some basic components.

1. To start the tests run `npm test`. This will launch the test runner in the interactive watch mode.
2. See the result of all the tests in the terminal.


