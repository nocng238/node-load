import { Entity, ManyToOne } from 'typeorm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Folder } from './folder.entity';
import { BaseEntity } from './base.entity';
import { ETable } from 'src/libs/enums/table.enum';
@Entity(ETable.MEDIA)
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
}
