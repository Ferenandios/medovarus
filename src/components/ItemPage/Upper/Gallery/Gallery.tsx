import { type FC, type JSX } from "react";
import { useAppSelector } from "../../../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Gallery: FC = (): JSX.Element => {
  const { images } = useAppSelector((state) => state.global.currentItem);

  if (!images.length)
    return (
      <div className="w-[47%] h-[128px] border rounded-2xl flex items-center justify-center">
        Нет изображений
      </div>
    );

  return (
    <div className="w-[47%] h-[128px] border rounded-2xl overflow-hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              className="w-full h-[128px] object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
