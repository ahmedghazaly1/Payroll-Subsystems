import { Document } from 'mongoose';
export type SigningBonusDocument = SigningBonus & Document;
export declare class SigningBonus {
    name: string;
    amount: number;
    description: string;
    eligibility: 'all' | 'specific_roles';
    eligibleRoles: string[];
    isActive: boolean;
}
export declare const SigningBonusSchema: import("mongoose").Schema<SigningBonus, import("mongoose").Model<SigningBonus, any, any, any, Document<unknown, any, SigningBonus, any, {}> & SigningBonus & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SigningBonus, Document<unknown, {}, import("mongoose").FlatRecord<SigningBonus>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<SigningBonus> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
