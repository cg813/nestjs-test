import { IsOptional, IsString, IsEnum, IsNumber, MaxLength, Max, Min } from 'class-validator';
import { OfferBoxSizeEnum } from '../offer.types';

export class CreateOfferDto {
  @IsString()
  @MaxLength(255)
  name: string;

  @IsString()
  @MaxLength(255)
  slug: string;

  @IsString()
  description: string;

  @IsString()
  requirements: string;

  @IsString()
  @MaxLength(255)
  thumbnail: string;

  @IsEnum(OfferBoxSizeEnum)
  boxSize: OfferBoxSizeEnum;

  @IsNumber()
  @Min(0)
  isDesktop: number;

  @IsNumber()
  @Min(0)
  isAndroid: number;

  @IsNumber()
  @Min(0)
  isIos: number;

  @IsString()
  @MaxLength(255)
  offerUrlTemplate: string;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  providerName?: string;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  externalOfferId?: string;
}

export class TempDto {
  @IsString()
  name: string;
}
