export interface AuthState {
  status: 'cheking' | 'not-authenticated' | 'authenticated';
  user: User,
}

export interface User {
  email: string;
  firstname: string;
  lastname: string;
}
