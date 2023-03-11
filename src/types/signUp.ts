export interface ISignUpInputData {
  name: string;
  email: string;
  password: string;
}

export interface ISignUpOutputData {
  message: string;
  status: number;
}
