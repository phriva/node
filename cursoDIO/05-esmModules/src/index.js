import {connectToDatabase, disconnectDatabase} from "./utils/database.js";
import * as api from "./utils/api.js";

connectToDatabase("my-database");
api.getDataFromApi();
disconnectDatabase();

 