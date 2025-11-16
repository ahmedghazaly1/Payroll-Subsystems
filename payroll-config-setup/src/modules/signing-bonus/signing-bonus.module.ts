import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SigningBonus, SigningBonusSchema } from './schemas/signing-bonus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SigningBonus.name, schema: SigningBonusSchema }
    ])
  ]
})
export class SigningBonusModule {}
