import { Injectable } from '@nestjs/common';
import { EmployeeProfile, EmployeeProfileClient } from './employee-profile.interface';

@Injectable()
export class EmployeeProfileMockService implements EmployeeProfileClient {
	private readonly profiles: EmployeeProfile[] = [
		{
			id: 'EP1',
			employeeId: 'EMP001',
			firstName: 'John',
			lastName: 'Doe',
			email: 'john.doe@example.com',
			role: 'Software Engineer',
			payGradeCode: 'PG1',
			isActive: true,
		},
		{
			id: 'EP2',
			employeeId: 'EMP002',
			firstName: 'Jane',
			lastName: 'Smith',
			email: 'jane.smith@example.com',
			role: 'Product Manager',
			payGradeCode: 'PG2',
			isActive: true,
		},
	];

	async getByEmployeeId(employeeId: string): Promise<EmployeeProfile | null> {
		return this.profiles.find((p) => p.employeeId === employeeId) ?? null;
	}

	async listAll(): Promise<EmployeeProfile[]> {
		return this.profiles;
	}
}
