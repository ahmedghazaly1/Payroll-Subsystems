import { Injectable } from '@nestjs/common';
import { OrgUnit, OrganizationClient } from './organization.interface';

@Injectable()
export class OrganizationMockService implements OrganizationClient {
	private readonly units: OrgUnit[] = [
		{ id: 'OU1', code: 'HR', name: 'Human Resources' },
		{ id: 'OU2', code: 'FIN', name: 'Finance' },
		{ id: 'OU3', code: 'ENG', name: 'Engineering', parentId: null },
	];

	async getUnitByCode(code: string): Promise<OrgUnit | null> {
		return this.units.find((u) => u.code === code) ?? null;
	}

	async listUnits(): Promise<OrgUnit[]> {
		return this.units;
	}
}
