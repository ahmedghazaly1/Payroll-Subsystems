import { Injectable } from '@nestjs/common';
import { EmployeeProfileMockService } from './employee-profile/employee-profile-mock.service';
import { OrganizationMockService } from './organization/organization-mock.service';
import { LeavesMockService } from './leaves/leaves-mock.service';
import { TimeManagementMockService } from './time-management/time-management-mock.service';
import { EmployeeProfile } from './employee-profile/employee-profile.interface';
import { LeaveRecord } from './leaves/leaves.interface';
import { OrgUnit } from './organization/organization.interface';
import { TimeRecord } from './time-management/time-management.interface';

@Injectable()
export class IntegrationService {
  constructor(
    private readonly employeeProfile: EmployeeProfileMockService,
    private readonly org: OrganizationMockService,
    private readonly leaves: LeavesMockService,
    private readonly time: TimeManagementMockService,
  ) {}

  // Employee profile helpers
  async getEmployee(employeeId: string): Promise<EmployeeProfile | null> {
    return this.employeeProfile.getByEmployeeId(employeeId);
  }

  async listEmployees(): Promise<EmployeeProfile[]> {
    return this.employeeProfile.listAll();
  }

  // Organization helpers
  async getOrgUnit(code: string): Promise<OrgUnit | null> {
    return this.org.getUnitByCode(code);
  }

  async listOrgUnits(): Promise<OrgUnit[]> {
    return this.org.listUnits();
  }

  // Leaves
  async listLeavesForEmployee(employeeId: string): Promise<LeaveRecord[]> {
    return this.leaves.listByEmployee(employeeId);
  }

  // Time management
  async getTimesheet(employeeId: string, monthIso: string): Promise<TimeRecord[]> {
    return this.time.getTimesheet(employeeId, monthIso);
  }
}

export default IntegrationService;
