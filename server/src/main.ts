import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  const options = new DocumentBuilder()
    .setTitle('Programming-Blog')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.APP_PORT);
  Logger.log(
    `😎 Application is running on port ${process.env.APP_PORT}`,
    `bootstrap`
  );
  Logger.log(`Hello World!`)
}
bootstrap();
