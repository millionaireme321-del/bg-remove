import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";

// App Config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

// Webhook route must use raw body
app.post("/api/user/webhooks", express.raw({ type: "application/json" }));

// Initialize Middleware
app.use(express.json());
app.use(cors());

// API ROUTES
app.get("/", (req, res) => res.send("API WORKING"));
app.use("/api/user", userRouter);

app.listen(PORT, () => console.log("Server running on port " + PORT));