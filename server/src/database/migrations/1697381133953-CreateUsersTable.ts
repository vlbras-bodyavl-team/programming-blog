import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1697381133953 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/*sql*/ `
      CREATE TABLE users (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(16) NOT NULL DEFAULT 'customer',
        token VARCHAR(255)
      );
    `);

    await queryRunner.query(/*sql*/ `
      CREATE UNIQUE INDEX "UIDX_users_email" ON users(email);
    `);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('users', 'UIDX_users_email');
    await queryRunner.dropTable('users');
  }
}
