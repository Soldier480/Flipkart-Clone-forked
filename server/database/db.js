import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.onsxn4i.mongodb.net/?retryWrites=true&w=majority`;
    // const URL = `mongodb+srv://${username}:${password}@ecommerce-web.onsxn4i.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Database connected successfully");
    } catch (err) {
        console.log(`Error while connecting the database`, err.message);
    }
};

export default Connection;
