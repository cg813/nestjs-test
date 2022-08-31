import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseOffer1Pipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata) {
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

    return {
      name: offers[0]?.offer_name,
      description: offers[0]?.offer_desc,
      requirements: offers[0]?.call_to_action,
      thumbnail: offers[0]?.image_url,
      boxSize: 'large',
      isDesktop: offers[0]?.platform == 'mobile' ? 0 : 1,
      isAndroid: offers[0]?.platform == 'mobile' && offers[0].device == 'iphone_ipad' ? 0 : 1,
      isIos: offers[0]?.platform == 'mobile' && offers[0].device == 'iphone_ipad' ? 1 : 0,
      offerUrlTemplate: offers[0]?.offer_url,
      providerName: "offer1",
      externalOfferId: offers[0]?.offer_id,
    }
  }
}

@Injectable()
export class ParseOffer2Pipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata) {
    if (!Object.keys(value).includes('data')) {
      throw new HttpException('No data', HttpStatus.BAD_REQUEST);
    }

    const data = value['data'];

    if (!Object.values(data)[0]) {
      throw new HttpException("No offers", HttpStatus.BAD_REQUEST);
    }

    const offer = Object.values(data)[0]["Offer"];
    const os = Object.values(data)[0]["OS"];

    return {
      name: offer.name,
      description: offer.description,
      requirements: offer.instructions,
      thumbnail: offer.icon,
      boxSize: 'small',
      isDesktop: os.web ? 1 : 0,
      isAndroid: os.android ? 1 : 0,
      isIos: os.ios ? 1 : 0,
      offerUrlTemplate: offer.tracking_url,
      providerName: "offer2",
      externalOfferId: offer.campaign_id,
    }
  }
}
