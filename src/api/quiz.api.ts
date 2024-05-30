import { api } from "./config.api";

export type ParamsType = {
  amount: number | string;
  category: string;
  difficulty: string;
};

export async function getQuestionsApi({ amount, category, difficulty }:ParamsType) {
  const response = await api.get(
    `?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  );
  return response.data.results;
}
