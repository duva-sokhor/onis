import { builder } from '@/builder';
import './user';

// defining schema
builder.queryType();
builder.mutationType();

export const schema = builder.toSchema({});
