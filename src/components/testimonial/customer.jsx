import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./customer.css";

export default function Customer() {
  const testimonials = [
    {
      text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
      name: "Jane Smith",
      rating: "⭐",
    },
    {
      text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
      name: "Jane Smith",
      rating: "⭐⭐",
    },
    {
      text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
      name: "Jane Smith",
      rating: "⭐⭐⭐",
    },
    {
      text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
      name: "Jane Smith",
      rating: "⭐⭐⭐⭐",
    },
    {
      text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
      name: "Jane Smith",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="maincustomer">
      <div className="customer">
        <h1>Customer testimonials</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className="star" key={index}>
              <span>{testimonial.rating}</span>
              <p>{testimonial.text}</p>
              <div className="id">
                <img src="" alt="" />
                <b>{testimonial.name}</b>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
