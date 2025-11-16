import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PayrollPoliciesService } from './payroll-policy.service';
import { CreatePayrollPolicyDto } from './dto/create-payroll-policy.dto';
import { UpdatePayrollPolicyDto } from './dto/update-payroll-policy.dto';

@Controller('payroll-policies')
export class PayrollPoliciesController {
  constructor(private readonly payrollPoliciesService: PayrollPoliciesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createPayrollPolicyDto: CreatePayrollPolicyDto) {
    const userId = 'temp-user-id';
    return this.payrollPoliciesService.create(createPayrollPolicyDto, userId);
  }

  @Get()
  findAll() {
    return this.payrollPoliciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payrollPoliciesService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() updatePayrollPolicyDto: UpdatePayrollPolicyDto) {
    return this.payrollPoliciesService.update(id, updatePayrollPolicyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollPoliciesService.remove(id);
  }
}