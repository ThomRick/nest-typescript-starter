import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';

const app = NestFactory.create(ApplicationModule);
app.then(instance => instance.listen(3000, () => console.log('Application is listening on port 3000')));
