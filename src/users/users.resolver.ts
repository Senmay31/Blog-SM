import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './user.type';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserType, { nullable: true })
  async user(@Args('id') id: string) {
    return this.userService.findOneById(id);
  }

  @Mutation(() => UserType)
  async createUser(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    return this.userService.createUser(username, email, password);
  }
}