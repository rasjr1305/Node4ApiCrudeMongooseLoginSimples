import mongoose from "mongoose";
import config from '../config/config.js'


mongoose.connect(config.MONGO_DB_URL);

export default mongoose;