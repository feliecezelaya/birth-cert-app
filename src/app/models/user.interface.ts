// This is the interface model returned by the authentication method
export interface UserLogged {
  status: number;
  message: string;
  displayName: string;
  role: string;
  username: string;
}

// This is the interface model sent to the authentication method
export interface UserAuth {
  username: string;
  password: string;
  group: string;
}
