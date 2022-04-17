import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  stock: string;

  @Column({ nullable: false, default: 0 })
  ano: number;

  @Column({ nullable: false })
  mes: string;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 6,
    nullable: false,
    default: 0,
  })
  open_price: number;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 6,
    nullable: false,
    default: 0,
  })
  highest_price: number;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 6,
    nullable: false,
    default: 0,
  })
  lowest_price: number;

  @Column({ nullable: false, default: 0 })
  volume: number;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 6,
    nullable: false,
    default: 0,
  })
  close_price: number;
}
