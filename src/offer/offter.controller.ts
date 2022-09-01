import { Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { OfferService } from './offer.service';
import { CreateOfferDto } from './dto/CreateOfferDto';
import { ParseOffer1, ParseOffer2 } from './offer.decorator';

@Controller()
export class OfferController {
  constructor(
    private readonly offerService: OfferService
  ) {
  }

  @Post("offer1")
  // @UsePipes(new ParseOffer1Pipe())
  async createOffer1 (
    @ParseOffer1() dto: CreateOfferDto
  ) {
    try {
      const error = await validate(dto);
      if (error.length) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
      return this.offerService.createOffer(dto);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Post("offer2")
  // @UsePipes(new ParseOffer2Pipe())
  async createOffer2 (
    @ParseOffer2() dto: CreateOfferDto
  ) {
    try {
      const error = await validate(dto);
      if (error.length) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }
      return this.offerService.createOffer(dto);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
