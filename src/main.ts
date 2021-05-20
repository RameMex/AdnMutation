import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
  var server_host = process.env.YOUR_HOST || '0.0.0.0';
  const app = await NestFactory.create(AppModule);
  await app.listen(server_port, server_host, function() {
    console.log('Escuchando en el puerto:  %d', server_port);
});
}
bootstrap();
