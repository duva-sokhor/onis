/* eslint-disable */
import type { Prisma, User, JwtSigningKey, Application } from "/Users/giva/dev/opengolia/onis/packages/prisma/client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: never;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    JwtSigningKey: {
        Name: "JwtSigningKey";
        Shape: JwtSigningKey;
        Include: never;
        Select: Prisma.JwtSigningKeySelect;
        OrderBy: Prisma.JwtSigningKeyOrderByWithRelationInput;
        WhereUnique: Prisma.JwtSigningKeyWhereUniqueInput;
        Where: Prisma.JwtSigningKeyWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    Application: {
        Name: "Application";
        Shape: Application;
        Include: never;
        Select: Prisma.ApplicationSelect;
        OrderBy: Prisma.ApplicationOrderByWithRelationInput;
        WhereUnique: Prisma.ApplicationWhereUniqueInput;
        Where: Prisma.ApplicationWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}