import { ConfigModule } from "@nestjs/config";
import "reflect-metadata";
import { Post } from "src/posts/entities/post.entity";
import { Topic } from "src/topics/entities/topic.entity";
import { User } from "src/users/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

ConfigModule.forRoot();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: ["dist/**/*.entity.js"],
  migrations: [__dirname + "/migrations/*.js"],
  synchronize: false,
  logging: true,
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;