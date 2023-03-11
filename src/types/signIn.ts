export interface ISignInInputData {
  email: string;
  password: string;
}

export interface ISignInOutputData {
  message: string;
  token: string;
  status: number;
}
