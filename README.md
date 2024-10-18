# Movie Viewer App

This is an app that shows details for the most popular movies.

## Features

This application allows the user to seamlessly navigate through the most popular movies, and open an individual movie to see more details.

There are two main views: a list of movies, and a detailed view for each movie.

The list shows the title, year, and the number of votes for the movie.

The detailed view shows the poster, the title, the year, the genres, and the overview. There are also link to open the movie in IMDB and go to the official website, if available.

Basic pagination was implemented, so that the user can move to different pages.

A filter was added as well to allow users to search movies by title.

## Technologies used

This app was built with JavaScript using React Native and Expo. It is using the API made available by [Tmdb](https://developer.themoviedb.org).

The testing has been done with Jest. ESLint and Prettier have been the main tools to keep code quality.

_Screaming architecture_ was selected as a pattern, to make sure that the folders provide information about the purpose of the files.

The color scheme was chosen to resemble the colors of [Wario](https://en.wikipedia.org/wiki/Wario) :)

## Installation

To set up this project, you need to have [Node.js](https://nodejs.org/en/) installed on your machine.

After that, you should this repository and run the following commands:

```bash
npm install
```

Before running the app, you need to create a file called `.env` in the root of the project, and add your api key for Tmdb. If you don't have one, you can obtain one for free in the [official website](https://developer.themoviedb.org):

```bash
API_KEY=YOUR_API_KEY
```

To run the project, you can use the following command, and expo will set up the enviroment:

```bash
npm start
```

There are several options available, but I was using mostly the `web` one. You can run the commands directly to use each of these different options directly:

```bash
npm run web
npm run android
```

### Other scripts

There are other scripts available, but they are not really necessary to run the project. They are:

- `npm run lint`: Runs ESLint to check the code quality.
- `npm run test`: Runs Jest to test the code.
- `npm run test-api`: Runs Jest to test the only API.
