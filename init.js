import app from "./app";

const PORT = 4000;

const handleListening = () => console.log(`listeng ${PORT}`);

app.listen(PORT, handleListening);
