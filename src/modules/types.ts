export interface RootState {
  loading: boolean;
  appName: string;
  appVersion: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
