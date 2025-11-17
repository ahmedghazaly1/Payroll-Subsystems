export interface TimeRecord {
	id: string;
	employeeId: string;
	date: string; // ISO date
	hoursWorked: number;
}

export interface TimeManagementClient {
	getTimesheet(employeeId: string, monthIso: string): Promise<TimeRecord[]>;
}
