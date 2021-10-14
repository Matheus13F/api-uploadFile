import { diskStorage } from 'multer';
import { resolve } from 'path';

const multerConfig = {
    dest: 'src/temporario/upload',
    storage: diskStorage({
        destination: (res, file, cb) => {
            cb(null, resolve('src/temporario/upload'))
        }
    }),
}

export default multerConfig