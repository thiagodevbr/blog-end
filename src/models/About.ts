import { uuid } from 'uuidv4';

class About {
  id: string;

  title: string;

  text: string;

  url: string;

  constructor({ title, text, url }: Omit<About, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.text = text;
    this.url = url;
  }
}

export default About;
