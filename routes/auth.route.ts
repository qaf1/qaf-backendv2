import express, { Express, Request, Response } from 'express'; 
import { authController } from '../controller/auth.controller'

const router = express.Router();

router.get('/', authController);
// router.get('/refresh', loginView);

export {
    router
}