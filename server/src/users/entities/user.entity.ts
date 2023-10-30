import { Role } from 'src/core/enums/role.enum';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index('UIDX_users_email', { unique: true })
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: Role.CUSTOMER })
  role: Role;

  @Column({ nullable: true })
  token?: string;
}
