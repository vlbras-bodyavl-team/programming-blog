import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserSeedModule } from './user/user-seed.module';
import { dataSourceOptions } from '../database.config';

@Module({
  imports: [
    UserSeedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
})
export class SeedModule {}
