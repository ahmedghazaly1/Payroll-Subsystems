import { PayrollPoliciesService } from './payroll-policy.service';
import { CreatePayrollPolicyDto } from './dto/create-payroll-policy.dto';
import { UpdatePayrollPolicyDto } from './dto/update-payroll-policy.dto';
export declare class PayrollPoliciesController {
    private readonly payrollPoliciesService;
    constructor(payrollPoliciesService: PayrollPoliciesService);
    create(createPayrollPolicyDto: CreatePayrollPolicyDto): Promise<import("./schemas/payroll-policy.schema").PayrollPolicy>;
    findAll(): Promise<import("./schemas/payroll-policy.schema").PayrollPolicy[]>;
    findOne(id: string): Promise<import("./schemas/payroll-policy.schema").PayrollPolicy>;
    update(id: string, updatePayrollPolicyDto: UpdatePayrollPolicyDto): Promise<import("./schemas/payroll-policy.schema").PayrollPolicy>;
    remove(id: string): Promise<void>;
}
