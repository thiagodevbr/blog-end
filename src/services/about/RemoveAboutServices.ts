import { getCustomRepository } from 'typeorm';
import AboutRepository from '../../repositories/AboutRepository';

interface Request {
  id: string;
}
class RemoveAboutServices {
  public async execute({ id }: Request): Promise<void> {
    const removeRepository = getCustomRepository(AboutRepository);
    await removeRepository.delete(id);
  }
}

export default RemoveAboutServices;
