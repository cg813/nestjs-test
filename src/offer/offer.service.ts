import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/CreateOfferDto';
import { Offer } from './offer.entity';

@Injectable()
export class OfferService {
  constructor(
    // @InjectRepository(Offer)
    // private readonly offerRepository: Repository<Offer>
  ) {}

  async createOffer(data: CreateOfferDto): Promise<CreateOfferDto> {
    /*
      * Todo:
      * Save offer
    */
    // const offer = this.offerRepository.create(data);
    // await this.offerRepository.save(offer);

    // return await this.offerRepository.findOne({ where: {id: offer.id} });
    return data;
  }
}
