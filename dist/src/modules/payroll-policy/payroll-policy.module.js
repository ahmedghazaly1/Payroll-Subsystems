"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollPoliciesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const payroll_policy_service_1 = require("./payroll-policy.service");
const payroll_policy_controller_1 = require("./payroll-policy.controller");
const payroll_policy_schema_1 = require("./schemas/payroll-policy.schema");
let PayrollPoliciesModule = class PayrollPoliciesModule {
};
exports.PayrollPoliciesModule = PayrollPoliciesModule;
exports.PayrollPoliciesModule = PayrollPoliciesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: payroll_policy_schema_1.PayrollPolicy.name, schema: payroll_policy_schema_1.PayrollPolicySchema }
            ])
        ],
        controllers: [payroll_policy_controller_1.PayrollPoliciesController],
        providers: [payroll_policy_service_1.PayrollPoliciesService],
        exports: [payroll_policy_service_1.PayrollPoliciesService]
    })
], PayrollPoliciesModule);
//# sourceMappingURL=payroll-policy.module.js.map