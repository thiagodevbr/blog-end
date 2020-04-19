import AboutRepositories from '../../repositories/AboutRepositories';

interface Request {
  id: string;
}
class RemoveAboutServices {
  private aboutRepositories: AboutRepositories;

  constructor(aboutRepositories: AboutRepositories) {
    this.aboutRepositories = aboutRepositories;
  }

  public execute({ id }: Request): null {
    this.aboutRepositories.delete({ id });
    return null;
  }
}

export default RemoveAboutServices;
