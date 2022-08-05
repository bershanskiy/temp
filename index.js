import express from 'express';
import { faker } from '@faker-js/faker';

'use strict';

async function main(port){
    const api = express();

    api.get('/', (req, res) => {
        res.send('Hello World!')
    });

    api.listen(8080, () => console.log(`Server started on ${port}`));
}

main(8080);