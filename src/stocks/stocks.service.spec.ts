import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from './entities/stock.entity';
import { StocksService } from './stocks.service';

describe('StocksService', () => {
  let service: StocksService;
  let stockRepository: Repository<Stock>;

  const STOCK_REPOSITORY_TOKEN = getRepositoryToken(Stock);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<StocksService>(StocksService);
    stockRepository = module.get<Repository<Stock>>(getRepositoryToken(Stock));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
    await service.create({
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
