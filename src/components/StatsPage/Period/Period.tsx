import { type FC, type JSX } from "react";

const Period: FC = (): JSX.Element => {
  const list: string[] = ["Сегодня", "7д", "30д", "📅"];
  return (
    <div className="mt-[15px] px-[30px]">
      <div className="flex justify-center items-center w-full h-[40px] bg-[#FFF4D6] border rounded-2xl">
        <span>Период:</span>
        <ul className="flex w-[180px] justify-between">
          {list.map((str) => (
            <>
              <li className="ml-[5px]">{str}</li>
              <span className="last:hidden">|</span>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Period;
