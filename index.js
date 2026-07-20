const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();