"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollPoliciesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payroll_policy_schema_1 = require("./schemas/payroll-policy.schema");
let PayrollPoliciesService = class PayrollPoliciesService {
    payrollPolicyModel;
    constructor(payrollPolicyModel) {
        this.payrollPolicyModel = payrollPolicyModel;
    }
    async create(createPayrollPolicyDto, userId) {
        const existingPolicy = await this.payrollPolicyModel.findOne({
            name: createPayrollPolicyDto.name
        }).exec();
        if (existingPolicy) {
            throw new common_1.ConflictException(`Payroll policy with name "${createPayrollPolicyDto.name}" already exists`);
        }
        const createdPolicy = new this.payrollPolicyModel({
            ...createPayrollPolicyDto,
            createdBy: userId,
            updatedBy: userId,
        });
        return await createdPolicy.save();
    }
    async findAll() {
        return await this.payrollPolicyModel.find().exec();
    }
    async findOne(id) {
        const policy = await this.payrollPolicyModel.findById(id).exec();
        if (!policy) {
            throw new common_1.NotFoundException(`Payroll policy with ID ${id} not found`);
        }
        return policy;
    }
    async update(id, updatePayrollPolicyDto) {
        const updatedPolicy = await this.payrollPolicyModel
            .findByIdAndUpdate(id, updatePayrollPolicyDto, { new: true })
            .exec();
        if (!updatedPolicy) {
            throw new common_1.NotFoundException(`Payroll policy with ID ${id} not found`);
        }
        return updatedPolicy;
    }
    async remove(id) {
        const result = await this.payrollPolicyModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Payroll policy with ID ${id} not found`);
        }
    }
};
exports.PayrollPoliciesService = PayrollPoliciesService;
exports.PayrollPoliciesService = PayrollPoliciesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(payroll_policy_schema_1.PayrollPolicy.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PayrollPoliciesService);
//# sourceMappingURL=payroll-policy.service.js.map