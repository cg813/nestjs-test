import { Controller, Post, UsePipes } from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferDto } from './dto/CreateOfferDto';
import { ParseOffer1Pipe, ParseOffer2Pipe } from '../utils/pipes';
import { ParseOffer1, ParseOffer2 } from '../utils/decorators';

@Controller('offer')
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
      return this.offerService.createOffer(dto);
    } catch (err) {
      console.log(err)
    }
  }

  @Post("offer2")
  // @UsePipes(new ParseOffer2Pipe())
  async createOffer2 (
    @ParseOffer2() dto: CreateOfferDto
  ) {
    try {
      return this.offerService.createOffer(dto);
    } catch (err) {
      console.log(err)
    }
  }
}
