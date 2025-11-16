import { Module } from '@nestjs/common';
import { EmployeeProfileMockService } from './employee-profile/employee-profile-mock.service';
import { OrganizationMockService } from './organization/organization-mock.service';
import { LeavesMockService } from './leaves/leaves-mock.service';
import { TimeManagementMockService } from './time-management/time-management-mock.service';
import { IntegrationService } from './integration.service';

@Module({
  providers: [
    EmployeeProfileMockService,
    OrganizationMockService,
    LeavesMockService,
    TimeManagementMockService,
    IntegrationService,
  ],
  exports: [IntegrationService, EmployeeProfileMockService, OrganizationMockService, LeavesMockService, TimeManagementMockService],
})
export class IntegrationModule {}

export default IntegrationModule;
