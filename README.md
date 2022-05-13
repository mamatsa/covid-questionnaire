# Redberry covid questionnaire

This is covid questionnaire for Redberry employees.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

#

## Prerequisites

- <img src="./readme/assets/node.svg" height="17" style="position: relative; top: 2px"/> _Node JS @12.X and up_

* <img src="./readme/assets/npm.png" height="16" style="position: relative; top: 4px"> _npm @6 and up_

#

## Tech Stack

- <img src="readme/assets/react.png" height="18" style="position: relative; top: 4px" /> [React @18.1.0](https://reactjs.org) - front-end framework
- <img src="readme/assets/tailwind.png"  height="20" style="position: relative; top: 4px" /> [TailwindCss @3.0.24](https://tailwindcss.com/) - CSS framework
- <img src="readme/assets/router.webp" height="11" /> [React Router @6.3.0](https://reactrouter.com/) - Client side router
- <img src="readme/assets/react-form.png" height="18" style="position: relative; top: 4px" /> [React Hook Form @7.30.0](https://react-hook-form.com/) - Form validation library
- <img src="readme/assets/cypress.png" height="18" style="position: relative; top: 4px" /> [Cypress @9.6.1](https://www.cypress.io/) - JS testing tool

#

## Getting Started

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/RedberryInternship/covid19-otomamatsashvili.git
```

2\. Next step requires installing all the dependencies:

```sh
npm install
```

or

```sh
yarn
```

3\. after that you can run Covid Questionnaire from terminal:

```sh
npm start
```

or

```
yarn run start
```

#

## Testing

This application is test driven. To write e2e and integration tests `@cypress` is used. You can find all of the tests into following path: `/cypress/integration/*.spec.js`

you can run cypress tests using following command:

```sh
npx cypress open
```

#

## Project Structure

```bash
├─── cypress  # native android project files
│   ├─── integration  # integration and e2e tests
│   ├─── plugins      # for loading plugins
│   ├─── support      # library configuration files
├─── public  # entry folder
│   ├─── favicon.png    # tab icon
│   ├─── index.html     # main html file
│   ├─── manifest.json  # index.html configurations
│   ├─── robots.txt     # search optimization
├─── readme  # readme assets
├─── src  # project source codes
│   ├─── assets      # project images and fonts
│   ├─── components  # reusable components
│   ├───├─── input.jsx                 # input with validations
│   ├───├─── Navigation.jsx            # main navigation
│   ├───├─── QuestionnaireWrapper.jsx  # main questionnaire container
│   ├───├─── RadioInput.jsx            # radio with validations
│   ├─── pages  # application pages
│   ├───├─── Start
│   ├───├───├─── Start.jsx  # start page
│   ├───├───├─── index.js   # exports page
│   ├───├─── Identification
│   ├───├───├─── Identification.jsx  # first page of questionnaire
│   ├───├───├─── index.js            # exports page
│   ├───├─── CovidStatus
│   ├───├───├─── CovidStatus.jsx  # second page of questionnaire
│   ├───├───├─── index.js         # exports page
│   ├───├─── Vaccination
│   ├───├───├─── Vaccination.jsx  # third page of questionnaire
│   ├───├───├─── index.js         # exports page
│   ├───├─── CovidPolitics
│   ├───├───├─── CovidPolitics.jsx  # fourth page of questionnaire
│   ├───├───├─── index.js           # exports page
│   ├───├─── Thanks
│   ├───├───├─── Thanks.jsx  # final request sending page
│   ├───├───├─── index.js    # exports thanks page
│   ├───├─── index.js  # export all pages
│   ├─── state  # global state management
│   ├───├─── questionnaire-context.js  # react context
│   ├───├─── QuestionnaireProvider.js  # context provider component
│   ├─── App.js   # main component with routing
│   ├─── app.css  # main css file
│   ├─── index.js # root JS file
├─── .eslintrc.json      # eslint config file
├─── .prettierrc.js      # prettier config file
├─── package.json        # dependency manager configurations
├─── cypress.json        # cypress config file
├─── tailwind.config.js  # tailwind config file
|
```

#

## Deployment

Application is deployed on digitalocean server with `ngnix`. You can view it [here](https://covid19.otar.redberryinternship.ge/).
