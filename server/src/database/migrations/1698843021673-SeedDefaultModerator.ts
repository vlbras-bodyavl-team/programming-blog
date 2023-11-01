import { Role } from 'src/core/enums/role.enum';
import { User } from 'src/users/entities/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDefaultModerator1698843021673 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    const moderatorData: Partial<User> = {
      email: 'default-moderator@progblog.com',
      password: '$argon2id$v=19$m=65536,t=3,p=4$NzfcNdFWG77EWmwEP+GfCg$oflnIcPG2XlQGt3GWPX+poBHvV6z7ZL24IDd54Jv/7k',
      role: Role.MODERATOR,
    };

    await queryRunner.query(/*sql*/ `
      INSERT INTO users (email, password, role)
      VALUES ($1, $2, $3)
    `,
      [moderatorData.email, moderatorData.password, moderatorData.role],
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/*sql*/ `
      DELETE FROM users WHERE email = 'default-moderator@progblog.com'
    `);
  }
}
