import { Role } from 'src/core/enums/role.enum';
import { User } from 'src/users/entities/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDefaultCustomer1698843184392 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    const customerData: Partial<User> = {
      email: 'default-customer@progblog.com',
      password: '$argon2id$v=19$m=65536,t=3,p=4$NzfcNdFWG77EWmwEP+GfCg$oflnIcPG2XlQGt3GWPX+poBHvV6z7ZL24IDd54Jv/7k',
      role: Role.CUSTOMER,
    };

    await queryRunner.query(
      /*sql*/ `
          INSERT INTO users (email, password, role)
          VALUES ($1, $2, $3)
        `,
      [customerData.email, customerData.password, customerData.role],
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(/*sql*/ `
          DELETE FROM users WHERE email = 'default-customer@progblog.com'
        `);
  }
}
