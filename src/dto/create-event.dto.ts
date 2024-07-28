/**
 * DTO  is a fancy name for defining the input properties and their types upfront.
 *
 * Using types in beneficial to you and your team mates in the long run,
 * everything would be more clear and more explicit, less error prone
 */

import { IsDateString, IsString, Length } from "class-validator";

export class CreateEventDto {
  @IsString()
  @Length(5, 255, {message: "The name length is wrong"})
  name: string;
  
  @IsString()
  @Length(5, 255)
  description: string;
  @IsDateString()
  when: string;
  
  @IsString()
  @Length(5, 255)
  address: string;
}
