import { Topic } from 'src/topics/entities/topic.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDefaultTopic1698741493663 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const topicData: Partial<Topic> = {
      name: 'Node.js',
    };
    await queryRunner.query(
      /*sql*/ `
      INSERT INTO topics (name)
      VALUES ($1)
    `,
      [topicData.name],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/*sql*/ `
      DELETE FROM topics WHERE name = 'Node.js'
    `)
  }
}
