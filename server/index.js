import express from "express";
import { postAdmission } from "./admission";

const router = express.Router()
const app = express();

router.post('/', postAdmission);