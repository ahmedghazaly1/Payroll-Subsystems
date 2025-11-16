export interface EmployeeProfile {
	id: string;
	employeeId: string;
	firstName: string;
	lastName: string;
	email?: string;
	role?: string;
	payGradeCode?: string;
	isActive?: boolean;
}

export interface EmployeeProfileClient {
	getByEmployeeId(employeeId: string): Promise<EmployeeProfile | null>;
	listAll(): Promise<EmployeeProfile[]>;
}
