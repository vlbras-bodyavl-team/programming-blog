import { ConfigModule } from '@nestjs/config';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

ConfigModule.forRoot();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_NAME,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  synchronize: false,
  logging: true,
  ssl:
    process.env.POSTGRES_SSL_ENABLED === 'true'
      ? {
          rejectUnauthorized:
            process.env.POSTGRES_REJECT_UNAUTHORIZED === 'true',
        }
      : undefined,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
