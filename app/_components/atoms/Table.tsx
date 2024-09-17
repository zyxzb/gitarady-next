import { Wrapper } from './Table.styled';

const Table = () => {
  return (
    <Wrapper>
      <thead>
        <tr>
          <th colSpan={2}>Więcej ➡ Taniej</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 X 60 MINUT </td>
          <td>Inwestycja 90zł</td>
        </tr>
        <tr>
          <td>4 X 60 MINUT </td>
          <td>Inwestycja 320zł</td>
        </tr>
        <tr>
          <td>8 X 60 MINUT </td>
          <td>Inwestycja 600zł</td>
        </tr>
      </tbody>
    </Wrapper>
  );
};

export default Table;
