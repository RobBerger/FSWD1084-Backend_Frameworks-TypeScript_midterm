import { InferAttributes, InferCreationAttributes, Model, Sequelize, DataTypes } from "sequelize";

export class Pets extends Model<InferAttributes<Pets>, InferCreationAttributes<Pets>>{
    declare petId: number;
    declare name: string;
    declare imgUrl: string;
    declare description: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function PetFactory(sequelize: Sequelize) {
    Pets.init({
        petId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'pet',
        freezeTableName: true,
        sequelize
    });
}