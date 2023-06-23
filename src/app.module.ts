import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './modules/games/games.module';
import { Games } from './modules/games/entities/game.entity';
import { CharactersModule } from './modules/characters/characters.module';
import { FramedataModule } from './modules/framedata/framedata.module';
import { Characters } from './modules/characters/entities/character.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'framebot-DB',
      entities: [Games, Characters],
      synchronize: true,
    }),
    GamesModule,
    CharactersModule,
    FramedataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
