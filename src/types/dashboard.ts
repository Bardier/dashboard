export interface IUser {
  name: string;
  date: string;
}

export interface IStatistic {
  compute_resources: number;
  games: number;
  iam_policies: number;
  iam_roles: number;
  iam_users: number;
}

export interface IGeneralSalesTime {
  card_name: string;
  card_number: string;
  date: string;
  limited: number;
  model: { image: string | null; name: string };
  operations: number;
  price: string;
  rating: number;
  status: string;
  type: string;
}

export interface IChartData {
  blue: number | null;
  red: number | null;
  green: number | null;
  date: string;
}

export interface IDashboard {
  chartData: IChartData[];
  general_sales_time: IGeneralSalesTime[];
  statistic: IStatistic;
  users: IUser[];
  setDashboard: (dashBoard: IDashboard) => void;
}
