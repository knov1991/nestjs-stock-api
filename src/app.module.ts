import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [TypeOrmModule.forRoot(), StocksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
