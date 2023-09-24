import { IsNotEmpty, IsString } from "class-validator";
import { Topic } from "src/topics/entities/topic.entity";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    content: string

    @IsString()
    @IsNotEmpty()
    topic: string
}