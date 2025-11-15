import { Document } from 'mongoose';
export type SystemSettingsDocument = SystemSettings & Document;
export declare class SystemSettings {
    settingKey: string;
    settingValue: any;
    description: string;
    approvalStatus: string;
    approvedBy: string;
    createdBy: string;
}
export declare const SystemSettingsSchema: import("mongoose").Schema<SystemSettings, import("mongoose").Model<SystemSettings, any, any, any, Document<unknown, any, SystemSettings, any, {}> & SystemSettings & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SystemSettings, Document<unknown, {}, import("mongoose").FlatRecord<SystemSettings>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<SystemSettings> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
