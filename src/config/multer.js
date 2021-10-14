import { diskStorage } from 'multer';
import { resolve } from 'path';

const multerConfig = {
    dest: 'tmp/upload',
    storage: diskStorage({
        destination: (res, file, cb) => {
            cb(null, resolve('tmp/upload'))
        }
    }),
}

export default multerConfig