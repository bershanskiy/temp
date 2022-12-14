import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function main(port) {
    const api = await NestFactory.create<NestExpressApplication>(AppModule);

    /*
    api.get('/', (req, res) => {
        res.send(`\
        <div>\
          <ol>\
            <li><a href="/category-list">category-list</li>
            <li><a href="/news-by-category">news-by-category</li>
            <li><a href="/story/1">/story/:storyId</li>
          </ol>\
        </div>`);
    });

    api.get('/category-list', (req, res) => {
        res.send('Hello World!')
    });

    api.get('/news-by-category', (req, res) => {
        res.send('Hello World!')
    });

    api.get('/story/:storyId', (req, res) => {
        res.send('Hello World!')
    });
    */

    api.listen(8080, () => console.log(`Server started on ${port}`));
}

main(8080);
