import { Request, Response } from "express";

import { sign, verify } from "jsonwebtoken";

const validateTokenService = (token: string, res: Response) => {
    const secret = 'duongvu';
    try {
        const response = verify(token, secret);
        res.statusCode = 200;
        res.send(response);
        res.end();
    } catch (err) {
        throw (err)
    }
}

const generateTokenService = (id: string, res: Response) => {
    try {
        const fifteenMins = 60 * 15 * 1000;
        const secret = process.env.SECRET || "";
        const accessUser = { id };
        const accessToken = sign(
            { user: accessUser },
            secret,
            {
                expiresIn: fifteenMins
            }
        );
        res.statusCode = 200;
        res.send(accessToken)
    } catch (err) {
        throw (err)
    }
}


export default { generateTokenService, validateTokenService }