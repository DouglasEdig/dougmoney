import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import moment from "moment";

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}
export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api("/transactions").then((response) =>
      setTransactions(response?.data?.transactions)
    );
  }, []);

  const parseMoney = (value: number, currency?: string) => {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: currency || "BRL",
    });
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction?.title}</td>
                <td className={transaction?.type}>
                  {parseMoney(transaction?.amount)}
                </td>
                <td>{transaction?.category}</td>
                <td>
                  {moment(transaction?.createdAt).format("DD-MM-YY hh:mm:ss")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
