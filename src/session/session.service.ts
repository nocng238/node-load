import { Injectable } from "@nestjs/common";
import { CreateSessionDto } from "./dto/create-session.dto";
import { UpdateSessionDto } from "./dto/update-session.dto";
import { FindOptionsWhere, Repository } from "typeorm";
import { Session } from "./entities/session.entity";
import { EntityCondition } from "../libs/utils/types/entity-condition.type";
import { NullableType } from '../../test/types/nullable.type';

@Injectable()
export class SessionService {
  constructor(private readonly sessionRepository: Repository<Session>) {
  }

  create(data: Session): Promise<Session> {
    return this.sessionRepository.save(this.sessionRepository.create(data));
  }


  findOne(options: EntityCondition<Session>):Promise<NullableType<Session>> {
    return this.sessionRepository.findOne({
      where: options as FindOptionsWhere<Session>,
    });
  }

  update(
    id: string,
    payload: Partial<
      Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
    >,
  ) {
    console.log('payload: ', payload);
    return this.sessionRepository.update(id, payload);
  }

  async softDelete(sessionId: string | number) {
    return `This action removes a #${sessionId} session`;
  }
}
