import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  public async create(@Body() body) {
    return { body };
  }
}
