import { Topic } from 'src/topics/entities/topic.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => Topic, (topic) => topic.posts, { onDelete: 'CASCADE'})
  topic: Topic;
  
  @CreateDateColumn()
  createdAt: Date;
}
