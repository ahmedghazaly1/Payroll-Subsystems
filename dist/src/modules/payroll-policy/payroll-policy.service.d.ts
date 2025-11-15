import { Model } from 'mongoose';
import { PayrollPolicy } from './schemas/payroll-policy.schema';
import { CreatePayrollPolicyDto } from './dto/create-payroll-policy.dto';
import { UpdatePayrollPolicyDto } from './dto/update-payroll-policy.dto';
export declare class PayrollPoliciesService {
    private readonly payrollPolicyModel;
    constructor(payrollPolicyModel: Model<PayrollPolicy>);
    create(createPayrollPolicyDto: CreatePayrollPolicyDto, userId: string): Promise<PayrollPolicy>;
    findAll(): Promise<PayrollPolicy[]>;
    findOne(id: string): Promise<PayrollPolicy>;
    update(id: string, updatePayrollPolicyDto: UpdatePayrollPolicyDto): Promise<PayrollPolicy>;
    remove(id: string): Promise<void>;
}
