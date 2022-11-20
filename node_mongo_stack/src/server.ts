import App from "./app";

// port
const PORT = process.env.PORT || 5000;

// initial app
const app = new App();

// starting server by listen express
app.listen(PORT);