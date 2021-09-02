import express from "express";
import * as fund from "../controller/fund.controller";

const router = express.Router();

router.route('/:code')
    .get(fund.findAllById);

export default router;