import { type FC, type JSX } from "react";
import Button from "./Button/Button";
import { useAppDispatch } from "../../../hooks";
import { getItem, setShowModal } from "../../../features/global.slice";

const Buttons: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const buttons: {
    text: string;
    background: string;
    handleClick: (id: number) => void;
    to: (id: number) => string;
  }[] = [
    {
      text: "✔ Одобрить",
      background: "#D4F4DD",
      handleClick: (id: number) => {
        dispatch(getItem(id));
      },
      to: (id) => `/item/${id + 1}`,
    },
    {
      text: "✖ Отклонить",
      background: "#FED6D6",
      handleClick: () => {
        dispatch(setShowModal(true));
      },
      to: (id) => `/item/${id}`,
    },
    {
      text: "↩ Доработка",
      background: "#FFF4D6",
      handleClick: (id: number) => {
        dispatch(getItem(id));
      },
      to: (id) => `/item/${id + 1}`,
    },
  ];
  return (
    <>
      <div className="px-[30px]">
        <div className="flex justify-between w-full mt-[30px]">
          {buttons.map(({ text, background, handleClick, to }) => (
            <Button
              text={text}
              background={background}
              handleClick={handleClick}
              to={to}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Buttons;
