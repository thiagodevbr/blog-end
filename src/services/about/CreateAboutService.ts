import { getCustomRepository } from 'typeorm';
import About from '../../models/About';
import AboutRepository from '../../repositories/AboutRepository';

interface Request {
  title: string;
  text: string;
  url: string;
}

class CreateAboutService {
  public async execute({ title, text, url }: Request): Promise<About> {
    const aboutRepository = getCustomRepository(AboutRepository);
    const about = await aboutRepository.create({
      title,
      text,
      url,
    });
    await aboutRepository.save(about);
    return about;
  }
}

export default CreateAboutService;
