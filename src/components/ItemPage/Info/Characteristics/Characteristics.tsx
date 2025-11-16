import { type FC, type JSX } from "react";

interface CharacteristicsProps {
  data: Record<string, string>;
}

const Characteristics: FC<CharacteristicsProps> = ({ data }): JSX.Element => {
  const entries = Object.entries(data);

  return (
    <>
      <h4>Характеристики:</h4>
      <table className="w-full border-collapse text-sm mt-[15px]">
        <tbody>
          {entries.map(([key, value]) => (
            <tr key={key} className="border-b">
              <td className="py-2 pr-4 font-medium">{key}</td>
              <td className="py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Characteristics;
