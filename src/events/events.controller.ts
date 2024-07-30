import {Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, NotFoundException, Param, ParseIntPipe, Patch, Post, SerializeOptions, UseInterceptors} from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { Event } from "./event.entity";
import { Like, MoreThan, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Controller("api/v1/events")
export class EventsController {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>
  ){}

  @Get()
  async findAll() {
    return await this.repository.find();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id) {
    const event = await this.repository.findOneBy({id: id});
    if (!event) throw new NotFoundException();
    return event;
  }

  @Post()
  async create(@Body() input: CreateEventDto) {
    return await this.repository.save({
      ...input,
      when: new Date(input.when)
    });
  }

  @Patch(":id")
  async update(@Param("id", ParseIntPipe) id, @Body() input: UpdateEventDto) {
    const event = await this.repository.findOneBy({id: id});
    if (!event) throw new NotFoundException();
    return await this.repository.save({
      ...event,
      ...input,
      when: input.when ? new Date(input.when) : event.when 
    });
  }

  @Delete(":id")
  @HttpCode(204)
  async remove(@Param("id", ParseIntPipe) id) {
    const event = await this.repository.findOneBy({id: id});
    if (!event) throw new NotFoundException();
    await this.repository.remove(event);
  }
}
