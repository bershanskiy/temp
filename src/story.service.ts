import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Story } from './story.entity';

@Injectable()
export class StoryService {
  constructor(
    @InjectRepository(Story)
    private SoryRepository: Repository<Story>,
  ) {}

  findAll(): Promise<Story[]> {
    return this.SoryRepository.find();
  }

  findOne(id: string): Promise<Story> {
    return this.SoryRepository.findOneBy({ id: Number(id) });
  }

  // TODO: validate?
  async remove(id: string): Promise<void> {
    await this.SoryRepository.delete(Number(id));
  }
}