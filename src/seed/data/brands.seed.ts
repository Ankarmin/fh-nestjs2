import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'toyota',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'honda',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'jeep',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'ford',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'volvo',
    createdAt: Date.now(),
  },
];
