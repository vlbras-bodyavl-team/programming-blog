import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'argon2';
import { Role } from 'src/core/enums/role.enum';
import { User } from 'src/users/entities/user.entity';

import { Repository } from 'typeorm';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async run() {
    const countAdmin = await this.repository.count({
      where: {
        role: Role.ADMIN,
      },
    });

    if (!countAdmin) {
      const password = await hash('secret');

      await this.repository.save(
        this.repository.create({
          email: 'admin@example.com',
          password,
          role: Role.ADMIN,
        }),
      );
    }

    const countCustomer = await this.repository.count({
      where: {
        role: Role.CUSTOMER,
      },
    });

    if (!countCustomer) {
      const password = await hash('secret');

      await this.repository.save(
        this.repository.create({
          email: 'john.doe@example.com',
          password,
          role: Role.CUSTOMER,
        }),
      );
    }
  }
}
