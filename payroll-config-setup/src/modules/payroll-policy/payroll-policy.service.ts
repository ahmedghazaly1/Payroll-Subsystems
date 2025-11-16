import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PayrollPolicy } from './schemas/payroll-policy.schema';
import { CreatePayrollPolicyDto } from './dto/create-payroll-policy.dto';
import { UpdatePayrollPolicyDto } from './dto/update-payroll-policy.dto';

@Injectable()
export class PayrollPoliciesService {
  constructor(
    @InjectModel(PayrollPolicy.name)
    private readonly payrollPolicyModel: Model<PayrollPolicy>,
  ) {}

  async create(createPayrollPolicyDto: CreatePayrollPolicyDto, userId: string): Promise<PayrollPolicy> {
    const existingPolicy = await this.payrollPolicyModel.findOne({ 
      name: createPayrollPolicyDto.name 
    }).exec();
    
    if (existingPolicy) {
      throw new ConflictException(`Payroll policy with name "${createPayrollPolicyDto.name}" already exists`);
    }

    const createdPolicy = new this.payrollPolicyModel({
      ...createPayrollPolicyDto,
      createdBy: userId,
      updatedBy: userId,
    });
    
    return await createdPolicy.save();
  }

  async findAll(): Promise<PayrollPolicy[]> {
    return await this.payrollPolicyModel.find().exec();
  }

  async findOne(id: string): Promise<PayrollPolicy> {
    const policy = await this.payrollPolicyModel.findById(id).exec();
    if (!policy) {
      throw new NotFoundException(`Payroll policy with ID ${id} not found`);
    }
    return policy;
  }

  async update(id: string, updatePayrollPolicyDto: UpdatePayrollPolicyDto): Promise<PayrollPolicy> {
    const updatedPolicy = await this.payrollPolicyModel
      .findByIdAndUpdate(id, updatePayrollPolicyDto, { new: true })
      .exec();
    
    if (!updatedPolicy) {
      throw new NotFoundException(`Payroll policy with ID ${id} not found`);
    }
    
    return updatedPolicy;
  }

  async remove(id: string): Promise<void> {
    const result = await this.payrollPolicyModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Payroll policy with ID ${id} not found`);
    }
  }
}