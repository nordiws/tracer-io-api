import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PlantsModule } from './plant.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StrainsModule } from './strain.module'
import { HarvestsModule } from './harvest.module'
import { typeOrmConfig } from '../config/typeorm.config'
import { Plant } from '../entities/plant.entity'
import { Strain } from '../entities/strain.entity'
import { Harvest } from '../entities/harvest.entity'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot(typeOrmConfig.getTypeOrmConfig([Plant, Harvest, Strain])),
        PlantsModule,
        StrainsModule,
        HarvestsModule
    ],
})
export class AppModule { }
