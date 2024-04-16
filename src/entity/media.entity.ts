import { Entity, ManyToOne } from 'typeorm';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Folder } from './folder.entity';
@Entity('medias')
export class Media extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'media_primary_key',
  })
  id: string;

  @Column()
  name: string;

  @Column()
  path: string;

  @ManyToOne(() => User, (user) => user.medias, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Folder, (folder) => folder.medias, {
    // onUpdate: 'CASCADE',
    // onDelete: 'CASCADE',
  })
  folder: Folder;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
