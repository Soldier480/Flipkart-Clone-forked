import { products } from "./constants/product.js";
import Product from "./model/productSchema.js";

const DefaultData = async () => {
    try {
        // pass products to the database
        await Product.insertMany(products);
        console.log('Data imported successfully');
    } catch (err) {
        console.log(`Error while inserting default data`, err.message);
    }
}

export default DefaultData;