import { Post } from 'src/posts/entities/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('topics')
export class Topic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index('UIDX_topics_name', { unique: true })
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Post, (post) => post.topic)
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;
}
