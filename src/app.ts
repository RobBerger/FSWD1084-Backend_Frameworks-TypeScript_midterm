import { db } from './models';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import { petHome } from './controllers/petController';
import petRoutes from './routes/petRoutes';

const app = express();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../src/public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/views"));
app.set('view options', {layout: 'layout'});

app.use('/pets', petRoutes);
app.use('/', petHome);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: 'You are at the wrong URL'
    });
})

db.sync().then(() => {
    console.info("Connected to petDB")
});

app.listen(3000);