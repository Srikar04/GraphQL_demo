# 🚀 Apollo GraphQL Server and Client Project 🚀

This project is a simple demonstration of how to use Apollo Server and Apollo Client to build a full-stack GraphQL application. The server fetches data from a REST API and exposes it through a GraphQL endpoint. The client queries this endpoint to display the data.

## 📂 Project Structure 📂

The project is divided into two main directories:

- `client/`: This directory contains the React application that serves as the frontend. It uses Apollo Client to send GraphQL queries to the server.
- `server/`: This directory contains the Apollo Server setup. It fetches data from a REST API and exposes it through a GraphQL endpoint.

## 🚀 How to Run the Project 🚀

1. Navigate to the `server/` directory and run `npm install` to install the server dependencies.
2. Run `node index.js` to start the server. It will be available at `http://localhost:8000/graphql`.
3. Navigate to the `client/` directory and run `npm install` to install the client dependencies.
4. Run `npm start` to start the client. It will be available at `http://localhost:3000`.

## 📚 Key Files and Directories 📚

- `client/src/index.js`: This file sets up the Apollo Client and wraps the main `App` component with the `ApolloProvider`.
- `client/src/App.js`: This file contains the main `App` component that sends a GraphQL query and displays the results.
- `server/index.js`: This file sets up the Apollo Server, defines the GraphQL schema and resolvers, and starts the server.

## 📝 Final Notes 📝

This project is a great starting point for anyone looking to learn how to use Apollo Server and Apollo Client. Feel free to clone it and experiment with different queries and mutations!
