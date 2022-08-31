import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Offer } from './offer/offer.entity';
import { OfferService } from './offer/offer.service';
import { OfferController } from './offer/offter.controller';

@Module({
  imports: [],
  controllers: [AppController, OfferController],
  providers: [AppService, OfferService],
})
export class AppModule {}
