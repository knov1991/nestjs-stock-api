import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from './entities/stock.entity';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';

describe('StocksController', () => {
  let controller: StocksController;
  let stockRepository: Repository<Stock>;

  const STOCK_REPOSITORY_TOKEN = getRepositoryToken(Stock);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StocksController],
      providers: [
        StocksService,
        {
          provide: STOCK_REPOSITORY_TOKEN,
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<StocksController>(StocksController);
    stockRepository = module.get<Repository<Stock>>(getRepositoryToken(Stock));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('stockRepository should be fine', () => {
    expect(stockRepository).toBeDefined();
  });

  it('should create a new Stock', async () => {
    jest.spyOn(stockRepository, 'create').mockReturnValueOnce({
      id: 1,
      stock: 'PETR4',
      ano: 2000,
      mes: 'Janeiro',
      open_price: 1.234,
      highest_price: 2.345,
      lowest_price: 3.456,
      volume: 123456789,
      close_price: 4.567,
    });
    await controller.createStock({
      stock: 'PETR4',
      ano: 2000,
      mes: 'Janeiro',
      open_price: 1.234,
      highest_price: 2.345,
      lowest_price: 3.456,
      volume: 123456789,
      close_price: 4.567,
    });
    expect(stockRepository.save).toHaveBeenCalledWith({
      id: 1,
      stock: 'PETR4',
      ano: 2000,
      mes: 'Janeiro',
      open_price: 1.234,
      highest_price: 2.345,
      lowest_price: 3.456,
      volume: 123456789,
      close_price: 4.567,
    });
  });
});
