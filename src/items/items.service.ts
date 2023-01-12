import { Injectable } from '@nestjs/common';
import { Item } from './interface/items.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async create(item: Item): Promise<Item> {
    const newItem = await this.itemModel.create(item);
    return newItem;
  }

  async getAll(): Promise<Item[]> {
    const items = await this.itemModel.find();
    return items;
  }

  async getOne(id): Promise<Item> {
    const item = await this.itemModel.findById(id);
    return item;
  }

  async update(id, item: Item): Promise<Item> {
    const updatedItem = await this.itemModel.findOneAndUpdate(
      { _id: id },
      item,
      { new: true },
    );
    return updatedItem;
  }

  async delete(id): Promise<void> {
    return await this.itemModel.findByIdAndDelete(id);
  }
}
