import express from 'express';
import { routes } from './routes/routes';
import cors from 'cors';

const api = express();

const port = process.env.PORT || 8081;

api.use(express.json(), cors(), routes);

api.listen(port, () => console.log(`Odete de patinete na porta: ${port}`));
