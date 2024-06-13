import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ListAllWalletsOutputObject")
class ListAllWalletsOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    walletId!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    balance!: number;

    @Field(() => Boolean)
    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    locked!: boolean;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    createdAt?: Date;
}

export { ListAllWalletsOutput as ListAllWalletsOutput };