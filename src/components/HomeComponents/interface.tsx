export interface ShowProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ICredential {
  email: string;
  password: string;
  confirmPassword?: string;
}
