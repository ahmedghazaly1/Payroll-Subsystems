import { Injectable } from '@nestjs/common';
import { LeaveRecord, LeavesClient } from './leaves.interface';

@Injectable()
export class LeavesMockService implements LeavesClient {
	private readonly leaves: LeaveRecord[] = [
		{
			id: 'L1',
			employeeId: 'EMP001',
			fromDate: '2025-10-01',
			toDate: '2025-10-03',
			type: 'SICK',
			status: 'APPROVED',
		},
		{
			id: 'L2',
			employeeId: 'EMP002',
			fromDate: '2025-11-05',
			toDate: '2025-11-07',
			type: 'ANNUAL',
			status: 'PENDING',
		},
	];

	async listByEmployee(employeeId: string): Promise<LeaveRecord[]> {
		return this.leaves.filter((l) => l.employeeId === employeeId);
	}

	async getActiveLeaves(employeeId: string): Promise<LeaveRecord[]> {
		const now = new Date().toISOString().slice(0, 10);
		return this.leaves.filter((l) => l.employeeId === employeeId && l.fromDate <= now && l.toDate >= now && l.status === 'APPROVED');
	}
}
