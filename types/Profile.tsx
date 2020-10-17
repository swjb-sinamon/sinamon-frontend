export interface ProfileType {
  readonly uuid: string;
  readonly email: string;
  readonly name: string;
  readonly department: number;
  readonly studentGrade: number;
  readonly studentClass: number;
  readonly studentNumber: number;
  readonly password?: string;
  readonly isAdmin: boolean;
  readonly isTeacher: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deletedAt?: string;
}
