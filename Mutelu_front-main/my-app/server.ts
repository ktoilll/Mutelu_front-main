import express, { Request, Response } from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.all('*', (req: Request, res: Response) => {
        return handle(req, res);
    });

    server.listen(3000, (err?: Error) => {
        if (err) throw err;
        console.log(`> Access the page at http://localhost:3000/page/HomePageView`);
    });
    
});
