import { type FC, type JSX } from "react";
import Page from "./Page/Page";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { getAds } from "../../../../features/global.slice";

const Pages: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { currentPage, totalItems, itemsPerPage } = useAppSelector(
    (state) => state.global.pagination
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const generatePageNumbers = (
    currentPage: number,
    totalPages: number
  ): number[] => {
    const visible = 5;

    let start = currentPage - 2;
    let end = currentPage + 2;

    if (start < 1) {
      start = 1;
      end = Math.min(visible, totalPages);
    }

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(totalPages - visible + 1, 1);
    }

    const pages: number[] = [];
    for (let i = start; i <= end; i++) pages.push(i);

    return pages;
  };

  const buttons = generatePageNumbers(currentPage, totalPages);

  const goPrev = () => {
    if (currentPage > 1) dispatch(getAds(currentPage - 1));
  };

  const goNext = () => {
    if (currentPage < totalPages) dispatch(getAds(currentPage + 1));
  };

  return (
    <div className="flex justify-center">
      <button
        disabled={currentPage === 1}
        onClick={goPrev}
        className={`px-2 ${
          currentPage === 1 ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        ◀
      </button>
      <ul className="flex justify-between items-center w-[110px]">
        {buttons.map((page) => (
          <Page key={page} value={page} isActive={page === currentPage} />
        ))}
      </ul>
      <button
        disabled={currentPage === totalPages}
        onClick={goNext}
        className={`px-2 ${
          currentPage === totalPages ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        ▶
      </button>
    </div>
  );
};

export default Pages;
