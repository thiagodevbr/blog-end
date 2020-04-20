import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('about')
class About {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  url: string;
}

export default About;
