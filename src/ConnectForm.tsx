import { useFormContext } from "react-hook-form";

export const ConnectForm: React.FC<any> = ({ children }) => {
  const methods = useFormContext();

  return children({ ...methods });
};
