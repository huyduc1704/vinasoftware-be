import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true, // Allow cookies to be sent
  });

  //Cấu hình Swagger
  const config = new DocumentBuilder()
    .setTitle('Vinasoftware Accounting API')
    .setDescription('The Vinasoftware Accounting API description')
    .setVersion('1.0')
    .addTag('accounting')
    .addCookieAuth('access_token')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //Cấu hình Scalar
  app.use(
    '/docs',
    apiReference({
      theme: 'yellow',
      spec: {
        content: document
      },

      authentication: {
        preferredSecurityScheme: 'cookieAuth',
      },
    } as any),
  );


  //cấu hình http cookie
  app.use(cookieParser());

  await app.listen(process.env.PORT ?? 8080);
  console.log(`Application is running on: http://localhost:${process.env.PORT ?? 8080}`);
  console.log(`API Docs (Scalar) available at: http://localhost:${process.env.PORT ?? 8080}/docs`);
}
bootstrap();
