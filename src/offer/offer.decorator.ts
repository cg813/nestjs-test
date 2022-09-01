import { createParamDecorator, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { CreateOfferDto } from './dto/CreateOfferDto';
import { OfferBoxSizeEnum, OfferTypeEnum } from './offer.types';

export const ParseOffer1 = createParamDecorator(
  (filter: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const value = request.body;
    
    if (!Object.keys(value).includes('response')) {
      throw new HttpException('No response', HttpStatus.BAD_REQUEST);
    }

    const response = value['response'];

    if (!Object.keys(response).includes('offers')) {
      throw new HttpException("No offers", HttpStatus.BAD_REQUEST);
    }

    const offers = response['offers'];

    if (!offers.length) {
      throw new HttpException("No offers", HttpStatus.BAD_REQUEST);
    }

    const dto = new CreateOfferDto();
    dto.name = offers[0]?.offer_name;
    dto.slug = 'offer1_slug';
    dto.description = offers[0]?.offer_desc;
    dto.requirements = offers[0]?.call_to_action;
    dto.thumbnail = offers[0]?.image_url;
    dto.boxSize = OfferBoxSizeEnum.LARGE;
    dto.isDesktop = offers[0]?.platform == 'mobile' ? 0 : 1;
    dto.isAndroid = offers[0]?.platform == 'mobile' && offers[0].device == 'iphone_ipad' ? 0 : 1;
    dto.isIos = offers[0]?.platform == 'mobile' && offers[0].device == 'iphone_ipad' ? 1 : 0;
    dto.offerUrlTemplate = offers[0]?.offer_url;
    dto.providerName = OfferTypeEnum.OFFER_1;
    dto.externalOfferId = offers[0]?.offer_id;

    return dto;
  }
);


export const ParseOffer2 = createParamDecorator(
  (filter: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const value = request.body;
    
    if (!Object.keys(value).includes('data')) {
      throw new HttpException('No data', HttpStatus.BAD_REQUEST);
    }

    const data = value['data'];

    if (!Object.values(data)[0]) {
      throw new HttpException("No offers", HttpStatus.BAD_REQUEST);
    }

    const offer = Object.values(data)[0]["Offer"];
    const os = Object.values(data)[0]["OS"];

    const dto = new CreateOfferDto();

    dto.name = offer.name;
    dto.slug = 'offer2_slug';
    dto.description = offer.description;
    dto.requirements = offer.instructions;
    dto.thumbnail = offer.icon;
    dto.boxSize = OfferBoxSizeEnum.SMALL;
    dto.isDesktop = os.web ? 1 : 0;
    dto.isAndroid = os.android ? 1 : 0;
    dto.isIos = os.ios ? 1 : 0;
    dto.offerUrlTemplate = offer.tracking_url;
    dto.providerName = OfferTypeEnum.OFFER_2;
    dto.externalOfferId = offer.campaign_id?.toString();

    return dto;
  }
);
