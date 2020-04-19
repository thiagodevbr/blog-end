import About from '../models/About';

interface CreateAboutDTO {
  title: string;
  text: string;
  url: string;
}

interface RemoveAboutDTO {
  id: string;
}

class AboutRepositories {
  private about: About[];

  constructor() {
    this.about = [];
  }

  public all(): About[] {
    return this.about;
  }

  public create({ title, text, url }: CreateAboutDTO): About {
    const about = new About({ title, url, text });
    this.about.push(about);
    return about;
  }

  public delete({ id }: RemoveAboutDTO): null {
    const index = this.about.findIndex(ab => ab.id === id);
    this.about.splice(index, 1);
    return null;
  }
}

export default AboutRepositories;
