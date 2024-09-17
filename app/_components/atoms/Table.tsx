import { PricingType } from '@/app/_types';
import { Wrapper } from './Table.styled';

type TableProps = {
  allPricings: PricingType[];
};

const Table = ({ allPricings }: TableProps) => {
  const { option1, option2, option3 } = allPricings[0];

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
          <td>Inwestycja {option1}zł</td>
        </tr>
        <tr>
          <td>4 X 60 MINUT </td>
          <td>Inwestycja {option2}zł</td>
        </tr>
        <tr>
          <td>8 X 60 MINUT </td>
          <td>Inwestycja {option3}zł</td>
        </tr>
      </tbody>
    </Wrapper>
  );
};

export default Table;
