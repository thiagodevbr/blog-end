import About from '../../models/About';
import AboutRepositories from '../../repositories/AboutRepositories';

interface Request {
  title: string;
  text: string;
  url: string;
}

class CreateAboutService {
  private aboutRepositories: AboutRepositories;

  constructor(aboutRepositories: AboutRepositories) {
    this.aboutRepositories = aboutRepositories;
  }

  public execute({ title, text, url }: Request): About {
    const about = this.aboutRepositories.create({ title, url, text });
    return about;
  }
}

export default CreateAboutService;
