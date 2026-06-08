import app from "./app.js";

app.listen(process.env.PORT, err => {
   console.log(err ? err : `Server is listen on port ${process.env.PORT}`);
});