import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { Tokens } from 'src/core/interfaces/tokens.interface';
import { UserId } from 'src/core/decorators/user-id.decorator';
import { Public } from 'src/core/decorators/public.decorator';
import { User } from 'src/core/decorators/user.decorator';
import { RefreshTokenGuard } from 'src/core/guards/refresh-token.guard';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBadRequestResponse({ description: 'email must be an email. password must be longer than or equal to 8 characters. password must be a string' })
  @ApiConflictResponse({ description: 'User already exists' })
  @Public()
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto): Promise<Tokens> {
    return this.authService.signUp(signUpDto);
  }

  @ApiUnauthorizedResponse({ description: 'Invalid password' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @Public()
  @Post('sign-in')
  @HttpCode(200)
  signIn(@Body() signInDto: SignInDto): Promise<Tokens> {
    return this.authService.signIn(signInDto);
  }

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Post('log-out')
  @HttpCode(200)
  logOut(@UserId() userId: string): void {
    return this.authService.logOut(userId);
  }

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Invalid refresh token' })
  @Public()
  @UseGuards(RefreshTokenGuard)
  @Post('refresh-tokens')
  @HttpCode(200)
  refreshTokens(
    @UserId() userId: string,
    @User('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
