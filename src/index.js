import e from "express";

const app = e();

app.use((req, res) => {
  res.json({ message: "server is running successfully" });
});

app.listen(process.env.PORT, (res, err) => {
  console.log(`server is up and running on port ${process.env.PORT}`);
});
