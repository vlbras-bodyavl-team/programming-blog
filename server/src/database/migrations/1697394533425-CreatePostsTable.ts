import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePostsTable1697394533425 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/*sql*/ `
      CREATE TABLE posts (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        "topicId" UUID NOT NULL,
        "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL,
        "createdBy" UUID,
        "updatedBy" UUID
      );
    `);

    await queryRunner.query(/*sql*/ `
      ALTER TABLE posts
      ADD CONSTRAINT "FK_topicId"
      FOREIGN KEY ("topicId")
      REFERENCES topics(id)
      ON DELETE CASCADE
    `);

    await queryRunner.query(/*sql*/ `
      ALTER TABLE posts
      ADD CONSTRAINT "FK_createdBy"
      FOREIGN KEY ("createdBy")
      REFERENCES users(id)
      ON DELETE SET NULL
    `);

    await queryRunner.query(/*sql*/ `
      ALTER TABLE posts
      ADD CONSTRAINT "FK_updatedBy"
      FOREIGN KEY ("updatedBy")
      REFERENCES users(id)
      ON DELETE SET NULL
    `);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/*sql*/ `
      ALTER TABLE posts
      DROP CONSTRAINT "FK_topicId"
    `);

    await queryRunner.query(/*sql*/ `
      ALTER TABLE posts
      DROP CONSTRAINT "FK_createdBy"
    `);

    await queryRunner.query(/*sql*/ `
      ALTER TABLE posts
      DROP CONSTRAINT "FK_updatedBy"
    `);

    await queryRunner.dropTable('posts');
  }
}
