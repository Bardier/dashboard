import { useMutation } from "react-query";
import { ISignInInputData, ISignInOutputData } from "@/types";

export const useSignIn = () => {
  const signInMutation = useMutation<
    ISignInOutputData,
    Error,
    ISignInInputData
  >((SignInInputData: ISignInInputData) =>
    fetch("https://vindev.cx.ua/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SignInInputData),
    }).then((res) => res.json())
  );

  return signInMutation;
};
