import { Post } from 'src/posts/entities/post.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('topics')
export class Topic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index('IDX_NAME', { unique: true })
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Post, (post) => post.topic)
  posts: Post[];
}
