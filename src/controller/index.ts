import { Request, Response } from "express";

import tokenService from "../service"

const generateToken = async (req: Request, res: Response) => {
    console.log("---->  ", req.body)
    const { id } = req.body;
    return tokenService.generateTokenService(id, res)
}

const validateToken = async (req: Request, res: Response) => {
    const { accessToken } = req.body;
    return tokenService.validateTokenService(accessToken, res)
}

export {
    generateToken,
    validateToken
}