import { Router } from 'express';
import AboutRepositories from '../repositories/AboutRepositories';
import CreateAboutServices from '../services/about/CreateAboutService';
import RemoveAboutServices from '../services/about/RemoveAboutServices';

const aboutRouter = Router();
const aboutRepositories = new AboutRepositories();

aboutRouter.get('/', (_, response) => {
  const about = aboutRepositories.all();
  return response.json(about);
});

aboutRouter.post('/', (request, response) => {
  const { title, text, url } = request.body;
  const createAbout = new CreateAboutServices(aboutRepositories);
  const about = createAbout.execute({ title, text, url });
  return response.json(about);
});

aboutRouter.delete('/:id', (request, response) => {
  const { id } = request.params;
  const deleteAbout = new RemoveAboutServices(aboutRepositories);
  deleteAbout.execute({ id });
  return response.json();
});

export default aboutRouter;
