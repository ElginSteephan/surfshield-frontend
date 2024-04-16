import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./team.css";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function team() {
  const team = [
    {
      name: "ALAN",
      position: "not-employed",
      img:"../../asset/alan.png"
    },
    {
      name: "ELGIN",
      position: "Founder",
      img:"../../asset/elgin.png"
    },
    {
      name: "JOE",
      position: "we dont know",
      img:"../../asset/joe.png"
    },
    {
      name: "MELVIN",
      position: "blank",
      img:"../../asset/melvin.png"
    },
  ];
  return (
    <div className="mainteam" id="team">
      <div className="team">
        <h1>Our team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="head">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="teambox"
        >
          {team.map((team, index) => (
            <SwiperSlide className="member" key={index}>
              <img src={team.img} alt="" />
              <b>{team.name}</b>
              <p>{team.position}</p>
              <div className="social">
                <a href="https://www.linkedin.com/in/alan-sabu-john/">
                  <FaLinkedin />
                </a>
                <a href="">
                  <FaXTwitter />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
