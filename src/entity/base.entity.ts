import {
  CreateDateColumn,
  DeleteDateColumn,
  BaseEntity as OrmBaseEntity,
  UpdateDateColumn,
} from 'typeorm';
export class BaseEntity extends OrmBaseEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
