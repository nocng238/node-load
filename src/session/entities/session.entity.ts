import {
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

import { User } from 'src/entity/user.entity';
import { BaseEntity } from 'src/entity/base.entity';
import { ETable } from 'src/libs/enums/table.enum';

@Entity(ETable.SESSION)
export class Session extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, {
    eager: true,
  })
  @Index()
  user: User;

  @Column()
  hash: string;
}
