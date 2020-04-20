import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AboutRepository from '../repositories/AboutRepository';
import CreateAboutServices from '../services/about/CreateAboutService';
import RemoveAboutServices from '../services/about/RemoveAboutServices';

const aboutRouter = Router();

aboutRouter.get('/', async (request, response) => {
  const aboutRepository = getCustomRepository(AboutRepository);
  const aboutList = await aboutRepository.find();
  return response.json(aboutList);
});

aboutRouter.post('/', async (request, response) => {
  const { title, text, url } = request.body;
  const createAbout = new CreateAboutServices();
  const about = await createAbout.execute({ title, text, url });
  return response.json(about);
});

aboutRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const removeAbout = new RemoveAboutServices();
  await removeAbout.execute({ id });
  return response.json();
});

export default aboutRouter;
