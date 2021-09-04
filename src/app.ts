import express, { Request, Response, NextFunction } from 'express';
import config from 'config';
import log from './logger';
import router from './routes';
import cors from 'cors';
import ExpressError from './utils/ExpressError';

const host = config.get('host') as string;
const port = config.get('port') as number;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/fund', router.fundRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Home');
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new ExpressError('Page Not Found!', 404));
});

app.listen(port, host, () => {
    log.info(`Server listening at http://${host}:${port}`);
});