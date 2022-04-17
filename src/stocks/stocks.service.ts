import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StocksService {
  create(createStockDto: CreateStockDto) {
    return 'This action adds a new stock';
  }

  findAll() {
    return `This action returns all stocks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stock`;
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }

  async getCsv(params) {
    const lerCsv = (
      await readFile(`./src/assets/${params.arquivo}.SA.csv`)
    ).toString();
    const splitCsv = lerCsv.split('\n');
    const [, ...linhas] = splitCsv;
    const open_price = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const highest_price = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const lowest_price = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const volume = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const close_price = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const numMes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    for (const linha of linhas) {
      const infoLinha = linha.split(',');
      const infoOpen = parseFloat(infoLinha[1]);
      const infoHigh = parseFloat(infoLinha[2]);
      const infoLow = parseFloat(infoLinha[3]);
      const infoClose = parseFloat(infoLinha[4]);
      const infoVolume = parseInt(infoLinha[6]);
      const data = infoLinha[0].split('-');
      const ano = data[0];
      const mes = parseInt(data[1]);
      if (ano == params.ano) {
        for (const i of numMes) {
          if (i == mes) {
            if (open_price[i - 1] == 0) {
              open_price[i - 1] = infoOpen;
            }
            if (highest_price[i - 1] < infoHigh) {
              highest_price[i - 1] = infoHigh;
            }
            if (lowest_price[i - 1] == 0 || lowest_price[i - 1] > infoLow) {
              lowest_price[i - 1] = infoLow;
            }
            volume[i - 1] += infoVolume;
            close_price[i - 1] = infoClose;
          }
        }
      }
    }

    return {
      Janeiro: {
        open_price: open_price[0],
        highest_price: highest_price[0],
        lowest_price: lowest_price[0],
        volume: volume[0],
        close_price: close_price[0],
      },
      Fevereiro: {
        open_price: open_price[1],
        highest_price: highest_price[1],
        lowest_price: lowest_price[1],
        volume: volume[1],
        close_price: close_price[1],
      },
      Março: {
        open_price: open_price[2],
        highest_price: highest_price[2],
        lowest_price: lowest_price[2],
        volume: volume[2],
        close_price: close_price[2],
      },
      Abril: {
        open_price: open_price[3],
        highest_price: highest_price[3],
        lowest_price: lowest_price[3],
        volume: volume[3],
        close_price: close_price[3],
      },
      Maio: {
        open_price: open_price[4],
        highest_price: highest_price[4],
        lowest_price: lowest_price[4],
        volume: volume[4],
        close_price: close_price[4],
      },
      Junho: {
        open_price: open_price[5],
        highest_price: highest_price[5],
        lowest_price: lowest_price[5],
        volume: volume[5],
        close_price: close_price[5],
      },
      Julho: {
        open_price: open_price[6],
        highest_price: highest_price[6],
        lowest_price: lowest_price[6],
        volume: volume[6],
        close_price: close_price[6],
      },
      Agosto: {
        open_price: open_price[7],
        highest_price: highest_price[7],
        lowest_price: lowest_price[7],
        volume: volume[7],
        close_price: close_price[7],
      },
      Setembro: {
        open_price: open_price[8],
        highest_price: highest_price[8],
        lowest_price: lowest_price[8],
        volume: volume[8],
        close_price: close_price[8],
      },
      Outubro: {
        open_price: open_price[9],
        highest_price: highest_price[9],
        lowest_price: lowest_price[9],
        volume: volume[9],
        close_price: close_price[9],
      },
      Novembro: {
        open_price: open_price[10],
        highest_price: highest_price[10],
        lowest_price: lowest_price[10],
        volume: volume[10],
        close_price: close_price[10],
      },
      Dezembro: {
        open_price: open_price[11],
        highest_price: highest_price[11],
        lowest_price: lowest_price[11],
        volume: volume[11],
        close_price: close_price[11],
      },
    };
  }
}
