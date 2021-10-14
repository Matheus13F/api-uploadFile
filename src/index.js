import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import { routes } from './routes/routes.js';

const app = express();

app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended: true}));

app.use(routes);

app.listen(3333, () => console.log('Server is running on port 3333'));

