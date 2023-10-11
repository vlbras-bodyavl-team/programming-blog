import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { AccessTokenGuard } from "./core/guards/access-token.guard";
import { TopicsModule } from "./topics/topics.module";
import { PostsModule } from "./posts/posts.module";
import { IsUUIDGuard } from "./core/guards/is-uuid.guard";
import { CacheModule } from "@nestjs/cache-manager";
import * as redisStore from "cache-manager-redis-store";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    CacheModule.register({
      ttl: parseInt(process.env.REDIS_TTL),
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    TopicsModule,
    PostsModule,
  ],
  providers: [
    {
      provide: "APP_GUARD",
      useClass: AccessTokenGuard,
    },
    {
      provide: "APP_GUARD",
      useClass: IsUUIDGuard,
    },
  ],
})
export class AppModule {}
