import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTopicDto {
  @ApiProperty({ description: 'The name of the topic', example: 'Nest.js' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
