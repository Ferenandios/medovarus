import { type FC, type JSX } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../../hooks";
import { setShowModal } from "../../../../features/global.slice";

const Button: FC<{
  text: string;
  background: string;
  handleClick: (id: number) => void;
  to: (id: number) => string;
}> = ({ text, background, handleClick, to }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.global.currentItem);
  const { showModal } = useAppSelector((state) => state.global);

  return (
    <>
      {/* ==== MODAL ==== */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-white w-[320px] rounded-2xl shadow-xl p-5 animate-fadeIn">
            <h3 className="text-lg font-semibold mb-3 text-center">
              Причины отклонения
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Запрещенный товар</span>
              </li>

              <li className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Неверная категория</span>
              </li>

              <li className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Некорректное описание</span>
              </li>

              <li className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Проблемы с фото</span>
              </li>

              <li className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Подозрение на мошенничество</span>
              </li>

              <li className="flex flex-col gap-1">
                <span>Другое:</span>
                <input
                  className="border rounded-lg px-2 py-1 text-sm"
                  placeholder="Введите причину..."
                />
              </li>
            </ul>

            {/* BUTTONS */}
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
                onClick={() => dispatch(setShowModal(false))}
              >
                Отмена
              </button>

              <Link
                className="px-4 py-2 bg-red-300 rounded-xl hover:bg-red-400 transition"
                onClick={() => {
                  handleClick(id + 1);
                  dispatch(setShowModal(false));
                }}
                to={to(id)}
              >
                Отправить
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center w-[32%] h-[40px]">
        <Link
          style={{ background: background }}
          className="flex justify-center items-center w-full h-full border rounded-2xl"
          onClick={() => handleClick(id + 1)}
          to={to(id)}
        >
          {text}
        </Link>
      </div>
    </>
  );
};

export default Button;
