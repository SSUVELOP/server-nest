import { Module } from '@nestjs/common';
import { FestPubGateway } from './festpub.gateway';


@Module({
  providers: [FestPubGateway],
})
export class FestPubModule {}