import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  createStock(@Body() createStockDto: CreateStockDto) {
    return this.stocksService.create(createStockDto);
  }

  @Get('db/:stock/:ano')
  findByStockAno(@Param() params) {
    return this.stocksService.findByStockAno(params);
  }

  @Get('db/all')
  findAll() {
    return this.stocksService.findAll();
  }

  @Get(':arquivo/:ano')
  getCsv(@Param() params) {
    return this.stocksService.getCsv(params);
  }
}
