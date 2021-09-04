import promisePool from "../db/pool";
import { Request, Response } from 'express';

export async function findAll(req: Request, res: Response) {
    const sql: string = 'select * from student';

    const [rows, fields] = await promisePool.execute(sql);

    return rows;

}

export async function findById(req: Request, res: Response) {
    const sql: string = 'select * from student where id = ?';

    const [rows, fields] = await promisePool.execute(sql, [1]);

    return rows;

}