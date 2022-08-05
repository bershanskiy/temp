import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private SoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.SoryRepository.find();
  }

  findOne(id: string): Promise<Category> {
    return this.SoryRepository.findOneBy({ id: Number(id) });
  }
}