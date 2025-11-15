import { Injectable } from '@nestjs/common';
import { EmployeeProfile, EmployeeProfileClient } from './employee-profile.interface';

@Injectable()
export class EmployeeProfileMockService implements EmployeeProfileClient {
	private readonly employees: EmployeeProfile[] = [
		{
			id: '1',
			employeeId: 'EMP001',
			firstName: 'Alice',
			lastName: 'Johnson',
			email: 'alice.johnson@example.com',
			role: 'Payroll Specialist',
			payGradeCode: 'PG-1',
			isActive: true,
		},
		{
			id: '2',
			employeeId: 'EMP002',
			firstName: 'Bob',
			lastName: 'Smith',
			email: 'bob.smith@example.com',
			role: 'HR Manager',
			payGradeCode: 'PG-3',
			isActive: true,
		},
	];

	async getByEmployeeId(employeeId: string): Promise<EmployeeProfile | null> {
		return this.employees.find((e) => e.employeeId === employeeId) ?? null;
	}

	async listAll(): Promise<EmployeeProfile[]> {
		return this.employees;
	}
}
