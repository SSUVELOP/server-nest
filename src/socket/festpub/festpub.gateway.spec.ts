import { Test, TestingModule } from '@nestjs/testing';
import { FestPubGateway } from './festpub.gateway';

describe('SocketGateway', () => {
  let gateway: FestPubGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FestPubGateway],
    }).compile();

    gateway = module.get<FestPubGateway>(FestPubGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
