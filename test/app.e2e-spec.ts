import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import { PrismaService } from 'src/prisma/prisma.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();

    prisma = app.get(PrismaService);
    await prisma.clearDB();
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    it('/ (GET)', () => {
      // return request(app.getHttpServer())
      //   .get('/')
      //   .expect(200)
      //   .expect('Hello World!');
    });
  });
  describe('User', () => {});
  describe('Bookmark', () => {});
});
