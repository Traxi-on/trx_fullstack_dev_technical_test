import "dotenv/config";
import {connect} from "mongoose";

const dbConnection = async():Promise<void>=>{
    const DB_URI=<string>process.env.MONGODB_URI;
    await connect(DB_URI)
}

export default dbConnection;