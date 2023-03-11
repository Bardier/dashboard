import { useMutation } from "react-query";

export const useUser = () => {
  const userMutation = useMutation((token: string) =>
    fetch("https://vindev.cx.ua/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json())
  );

  return userMutation;
};
