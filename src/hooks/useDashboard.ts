import { useMutation } from "react-query";
import { IDashboard } from "@/types";

export const useDashboard = () => {
  const dashboardMutation = useMutation<IDashboard, Error, string>(
    (token: string) =>
      fetch("https://vindev.cx.ua/dashboard", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json())
  );

  return dashboardMutation;
};
