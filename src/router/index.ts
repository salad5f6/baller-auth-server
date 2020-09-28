import * as express from 'express';
import { generateToken, validateToken } from "../controller"

const TokenRouter = express.Router()
TokenRouter.post('/generateToken/', generateToken)
TokenRouter.post('/validateToken/', validateToken)

export default TokenRouter;