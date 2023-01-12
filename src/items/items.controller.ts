import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interface/items.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemService.getOne(id);
  }

  @Put(':id')
  async updateItem(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id,
  ): Promise<Item> {
    return this.itemService.update(id, updateItemDto);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id): Promise<string> {
    this.itemService.delete(id);
    return 'Deleted successfully';
  }
}
