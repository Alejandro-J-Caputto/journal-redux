export interface LoginFormType {
  email: string,
  password: string
}
export interface AuthInitialState {
  uid: string,
  name: string
}

export interface RegisterFormType {
  email:string,
  password:string,
  name:string,
  passwordConfirm:string
}
export type loginDispatch = (uid: number | string, name: string) => CommonAction;
export type registerDispatch = (uid: number, name:string) => CommonAction;

export type CommonAction = {
  type: string;
  payload: {
      uid: number | string;
      name: string;
  }
};