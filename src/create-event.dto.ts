/**
 * DTO  is a fancy name for defining the input properties and their types upfront.
 *
 * Using types in beneficial to you and your team mates in the long run,
 * everything would be more clear and more explicit, less error prone
 */

export class CreateEventDto {
  name: string;
  description: string;
  when: string;
  address: string;
}
