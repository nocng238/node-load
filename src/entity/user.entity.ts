import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Media } from './media.entity';
import { Folder } from './folder.entity';
import { BaseEntity } from './base.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'user_primary_key',
  })
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Media, (media) => media.user)
  medias: Media[];

  @OneToMany(() => Folder, (folder) => folder.user)
  folders: Folder[];
}
