import { useMutation } from "react-query";
import { ISignUpInputData, ISignUpOutputData } from "@/types";

export const useSignUp = () => {
  const signUpMutation = useMutation<
    ISignUpOutputData,
    Error,
    ISignUpInputData
  >((signUpData: ISignUpInputData) =>
    fetch("https://vindev.cx.ua/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    }).then((res) => res.json())
  );

  return signUpMutation;
};
