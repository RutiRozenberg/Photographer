
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import path from 'path';
import dotenv from 'dotenv';
import './config/db.config';
import { swaggerSetup } from './swagger';
import authUserRouter from './routes/auth.user.route';
import { CheckBody } from './middlewares/existBody.middleware'
import authAdminRouter from './routes/auth.admin.route';
import { authentication } from './middlewares/authentication.middleware';


const app: Express = express();

const envPath = path.join(__dirname, '../config', '.env');
dotenv.config({ path: envPath });

const port = process.env.PORT;


swaggerSetup(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use(CheckBody);
app.use(authAdminRouter);
app.use(authUserRouter);
app.use(authentication);

app.listen(port, () => {

    console.log('Server is running on port ' + port);

});
