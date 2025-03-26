import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOneById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async createUser(username: string, email: string, password: string): Promise<User> {
    return this.userModel.create({ username, email, password });
  }
}