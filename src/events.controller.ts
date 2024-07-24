import {Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";
import { Event } from "./event.entity";

@Controller("api/v1/events")
export class EventsController {
  private events: Event[] = [];

  @Get()
  findAll() {
    return this.events;
  }

  @Get(":id")
  findOne(@Param("id") id) {
    return this.events.find((event) => event.id === parseInt(id));
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    const newEvent: Event = {
      ...input,
      when: new Date(input.when),
      id: this.events.length + 1,
    };
    this.events.push(newEvent);
    return newEvent;
  }

  @Patch(":id")
  update(@Param("id") id, @Body() input: UpdateEventDto) {
    const index = this.events.findIndex((event) => event.id === parseInt(id));
    this.events[index] = {
      ...this.events[index],
      ...input,
      when: input.when ? new Date(input.when) : this.events[index].when,
    };
    return this.events[index];
  }

  @Delete("id")
  remove(@Param("id") id) {
    this.events = this.events.filter((event) => event.id !== parseInt(id));
  }
}
