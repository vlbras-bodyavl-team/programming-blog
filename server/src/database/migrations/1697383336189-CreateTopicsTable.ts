import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTopicsTable1697383336189 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/*sql*/ `
      CREATE TABLE topics (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) UNIQUE NOT NULL,
        "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `);

    await queryRunner.query(/*sql*/ `
      CREATE UNIQUE INDEX "UIDX_topics_name" ON topics(name);
    `);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('topics', 'UIDX_topics_name');
    await queryRunner.dropTable('topics');
  }
}
