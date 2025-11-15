import { Injectable } from '@nestjs/common';
import { TimeRecord, TimeManagementClient } from './time-management.interface';

@Injectable()
export class TimeManagementMockService implements TimeManagementClient {
	private readonly records: TimeRecord[] = [
		{ id: 'T1', employeeId: 'EMP001', date: '2025-11-01', hoursWorked: 8 },
		{ id: 'T2', employeeId: 'EMP001', date: '2025-11-02', hoursWorked: 7.5 },
		{ id: 'T3', employeeId: 'EMP002', date: '2025-11-01', hoursWorked: 8 },
	];

	async getTimesheet(employeeId: string, monthIso: string): Promise<TimeRecord[]> {
		// monthIso expected 'YYYY-MM'
		return this.records.filter((r) => r.employeeId === employeeId && r.date.startsWith(monthIso));
	}
}
