import { Roles } from 'src/core/enums/roles.enum';
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

  @Column({ default: Roles.CUSTOMER })
  role: Roles;

  @Column({ nullable: true })
  token?: string;
}
