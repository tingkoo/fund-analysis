import { Request, Response } from 'express';
import {findAll, findById} from '../service/fund.service'

export function findAllByCode(req: Request, res: Response) {
    const {code} = req.params;
    if (!code) {
        return;
    }

    const result = findAll(req, res);

    result.then(rows => {
        res.json(rows);
    });
    
}

export function findAllById(req: Request, res: Response) {
    const {code} = req.params;
    if (!code) {
        return;
    }

    const result = findById(req, res);

    result.then(rows => {
        res.json(rows);
    });
    
}
