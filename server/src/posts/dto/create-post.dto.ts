import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto {
    @ApiProperty({ description: 'The title of the post', example: 'Nest.js' })
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({ description: 'The content of the post', example: 'Nest.js is a framework' })
    @IsString()
    @IsNotEmpty()
    content: string

    @ApiProperty({ description: 'The topic of the post', example: 'Nest.js' })
    @IsString()
    @IsNotEmpty()
    topic: string
}