import { Test, TestingModule } from '@nestjs/testing';
import { MutationController } from './mutation.controller';

describe('MutationController', () => {
  let controller: MutationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MutationController],
    }).compile();

    controller = module.get<MutationController>(MutationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
