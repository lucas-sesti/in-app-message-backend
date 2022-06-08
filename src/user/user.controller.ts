import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  public getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }
}
