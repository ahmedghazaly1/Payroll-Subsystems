export interface LeaveRecord {
	id: string;
	employeeId: string;
	fromDate: string; // ISO date
	toDate: string; // ISO date
	type: 'ANNUAL' | 'SICK' | 'UNPAID' | 'OTHER';
	status: 'APPROVED' | 'PENDING' | 'REJECTED';
}

export interface LeavesClient {
	listByEmployee(employeeId: string): Promise<LeaveRecord[]>;
	getActiveLeaves(employeeId: string): Promise<LeaveRecord[]>;
}
