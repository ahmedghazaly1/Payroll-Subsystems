// src/payroll-tracking/controllers/payroll-tracking.controller.ts
import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Delete,
    Query,
  } from '@nestjs/common';
  import { PayrollTrackingService } from './payroll-tracking.service';
  
  @Controller('payroll-tracking')
  export class PayrollTrackingController {
    constructor(
      private readonly payrollTrackingService: PayrollTrackingService,
    ) {}
  
    // =======================
    // REPORTS
    // =======================
  
    // POST /payroll-tracking/reports
    @Post('reports')
    async createReport(@Body() body: any) {
      return this.payrollTrackingService.createReport(body);
    }
  
    // GET /payroll-tracking/reports?employeeId=&payrollRunId=&periodCode=&reportType=
    @Get('reports')
    async getReports(
      @Query('employeeId') employeeId?: string,
      @Query('payrollRunId') payrollRunId?: string,
      @Query('periodCode') periodCode?: string,
      @Query('reportType') reportType?: string,
    ) {
      return this.payrollTrackingService.getReports({
        employeeId,
        payrollRunId,
        periodCode,
        reportType,
      });
    }
  
    // GET /payroll-tracking/reports/:id
    @Get('reports/:id')
    async getReportById(@Param('id') id: string) {
      return this.payrollTrackingService.getReportById(id);
    }
  
    // GET /payroll-tracking/reports/employee/:employeeId
    @Get('reports/employee/:employeeId')
    async getReportsForEmployee(@Param('employeeId') employeeId: string) {
      return this.payrollTrackingService.getReportsForEmployee(employeeId);
    }
  
    // GET /payroll-tracking/reports/run/:payrollRunId
    @Get('reports/run/:payrollRunId')
    async getReportsForRun(@Param('payrollRunId') payrollRunId: string) {
      return this.payrollTrackingService.getReportsForRun(payrollRunId);
    }
  
    // PATCH /payroll-tracking/reports/:id
    @Patch('reports/:id')
    async updateReport(@Param('id') id: string, @Body() body: any) {
      return this.payrollTrackingService.updateReport(id, body);
    }
  
    // DELETE /payroll-tracking/reports/:id
    @Delete('reports/:id')
    async deleteReport(@Param('id') id: string) {
      await this.payrollTrackingService.deleteReport(id);
      return { message: 'PayrollReport deleted successfully' };
    }
  
    // =======================
    // DISPUTES / CLAIMS
    // =======================
  
    // POST /payroll-tracking/disputes
    @Post('disputes')
    async createDispute(@Body() body: any) {
      // body should contain: employeeId, payrollRunId, reason, amountDisputed, etc.
      return this.payrollTrackingService.createDispute(body);
    }
  
    // GET /payroll-tracking/disputes?employeeId=&payrollRunId=&status=
    @Get('disputes')
    async getDisputes(
      @Query('employeeId') employeeId?: string,
      @Query('payrollRunId') payrollRunId?: string,
      @Query('status') status?: string,
    ) {
      return this.payrollTrackingService.getDisputes({
        employeeId,
        payrollRunId,
        status,
      });
    }
  
    // GET /payroll-tracking/disputes/:id
    @Get('disputes/:id')
    async getDisputeById(@Param('id') id: string) {
      return this.payrollTrackingService.getDisputeById(id);
    }
  
    // GET /payroll-tracking/disputes/employee/:employeeId
    @Get('disputes/employee/:employeeId')
    async getDisputesForEmployee(@Param('employeeId') employeeId: string) {
      return this.payrollTrackingService.getDisputesForEmployee(employeeId);
    }
  
    // PATCH /payroll-tracking/disputes/:id
    @Patch('disputes/:id')
    async updateDispute(@Param('id') id: string, @Body() body: any) {
      return this.payrollTrackingService.updateDispute(id, body);
    }
  
    // PATCH /payroll-tracking/disputes/:id/status
    @Patch('disputes/:id/status')
    async updateDisputeStatus(
      @Param('id') id: string,
      @Body()
      body: {
        status: 'submitted' | 'under_review' | 'approved' | 'rejected';
        reviewerId?: string;
      },
    ) {
      return this.payrollTrackingService.updateDisputeStatus(
        id,
        body.status,
        body.reviewerId,
      );
    }
  
    // DELETE /payroll-tracking/disputes/:id
    @Delete('disputes/:id')
    async deleteDispute(@Param('id') id: string) {
      await this.payrollTrackingService.deleteDispute(id);
      return { message: 'PayrollDispute deleted successfully' };
    }
  }
  
