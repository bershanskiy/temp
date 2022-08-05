import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { StoryService } from './story.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [StoryService],
})
export class CategoryModule {}