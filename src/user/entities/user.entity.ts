import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from 'src/entity/base.entity';
import { Media } from 'src/entity/media.entity';
import { Folder } from 'src/entity/folder.entity';
import { Session } from 'src/session/entities/session.entity';

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

  @OneToMany(() => Session, (session) => session.user)
  session: Session;

  @OneToMany(() => Media, (media) => media.user)
  medias: Media[];

  @OneToMany(() => Folder, (folder) => folder.user)
  folders: Folder[];
}
