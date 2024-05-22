import { api } from "./config.api";

type ParamsType = {
  amount: number;
  category: number;
  difficulty: string;
};

export async function getQuestions({ params }: { params: ParamsType }) {
  const response = await api.get(
    `?amount=${params.amount}&category=${params.category}&difficulty=${params.difficulty}&type=multiple`
  );
  return response.data;
}
