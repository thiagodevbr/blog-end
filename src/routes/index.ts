import { Router } from 'express';
import aboutRoutes from './about.routes';

const routes = Router();
routes.use('/about', aboutRoutes);

export default routes;
