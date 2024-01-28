import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({
        required: true,
    })
    name: string;

    @Prop({
        required: true,
    })
    email: string;

    @Prop({
        required: true,
        minlength: 8
    })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);