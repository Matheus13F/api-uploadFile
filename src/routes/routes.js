import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer.js';

const routes = Router();

routes.post('/post', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);

    return res.json({ status: 'Sucesso' });
});

export { routes };