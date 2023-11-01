import { Post } from 'src/posts/entities/post.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDefaultPost1698741661160 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const [topic] = await queryRunner.query(/*sql*/`
      SELECT id 
      FROM topics
      WHERE name = 'Node.js'
      LIMIT 1
    `)

    const postData: Partial<Post> = {
      title: 'Node.js',
      content: 'Node.js is a runtime environment for JavaScript that allows developers to run JavaScript code outside of a web browser.',
      topic
    };
    
    await queryRunner.query(/*sql*/ `
      INSERT INTO posts (title, content, "topicId")
      VALUES ($1, $2, $3)
    `,
      [postData.title, postData.content, postData.topic.id],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/*sql*/ `
    DELETE FROM posts WHERE title = 'Node.js'
  `)
  }
}
