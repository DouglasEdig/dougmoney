import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api("/transactions").then((response) => console.log(response?.data));
  }, []);

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
          <tr>
            <td>Desenvolvimento de wbsite</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/09/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.200</td>
            <td>Desenvolvimento</td>
            <td>10/09/2022</td>
          </tr>
          <tr>
            <td>NFT Monkey</td>
            <td className="deposit">R$15.000</td>
            <td>Desenvolvimento</td>
            <td>05/09/2022</td>
          </tr>
          <tr>
            <td>Contas</td>
            <td className="withdraw">- R$5.200</td>
            <td>Desenvolvimento</td>
            <td>10/09/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}