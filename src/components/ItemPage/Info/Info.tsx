import { type FC, type JSX } from "react";
import Characteristics from "./Characteristics/Characteristics";
import { useAppSelector } from "../../../hooks";

const Info: FC = (): JSX.Element => {
  const { seller, characteristics } = useAppSelector(
    (state) => state.global.currentItem
  );
  const getYearsPassed = (dateStr: string): string => {
    const now = new Date();
    const registered = new Date(dateStr);

    let years = now.getFullYear() - registered.getFullYear();

    // Уточняем, прошёл ли день рождения в этом году
    const hasBirthdayPassed =
      now.getMonth() > registered.getMonth() ||
      (now.getMonth() === registered.getMonth() &&
        now.getDate() >= registered.getDate());

    if (!hasBirthdayPassed) {
      years -= 1;
    }

    // Определяем правильное слово
    const lastDigit = years % 10;
    const lastTwoDigits = years % 100;

    let suffix = "лет";

    if (lastTwoDigits < 11 || lastTwoDigits > 19) {
      if (lastDigit === 1) suffix = "год";
      else if (lastDigit >= 2 && lastDigit <= 4) suffix = "года";
    }

    return `${years} ${suffix}`;
  };
  return (
    <>
      <div className="w-full px-[30px]">
        <div className="flex flex-col w-full min-h-[128px] border rounded-2xl py-[15px] mt-[15px]">
          <h4>&#x1F4DD; Полное описание</h4>
          <Characteristics data={characteristics} />
          <p className="text-center mt-[15px]">
            Продавец: {seller.name} | &#x2B50; {seller.rating}
          </p>
          <p className="text-center">
            {seller.totalAds} объявлений | На сайте:{" "}
            {getYearsPassed(seller.registeredAt)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
