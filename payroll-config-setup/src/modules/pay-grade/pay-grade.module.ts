import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PayGrade, PayGradeSchema } from './schemas/pay-grade.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PayGrade.name, schema: PayGradeSchema }
    ])
  ]
})
export class PayGradeModule {}
