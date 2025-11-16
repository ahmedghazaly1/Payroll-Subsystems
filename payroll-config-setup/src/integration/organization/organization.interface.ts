export interface OrgUnit {
	id: string;
	code: string;
	name: string;
	parentId?: string | null;
}

export interface OrganizationClient {
	getUnitByCode(code: string): Promise<OrgUnit | null>;
	listUnits(): Promise<OrgUnit[]>;
}
