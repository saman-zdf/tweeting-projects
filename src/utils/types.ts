export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}