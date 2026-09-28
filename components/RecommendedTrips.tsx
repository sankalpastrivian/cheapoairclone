"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function RecommendedTrips() {
  return (
    <section className="container my-4">

      <h2 className="fw-bold" style={{ color: "#002066" }}>
        Recommended for your next trip
      </h2>

      <p className="mb-4" style={{ color: "#002066" }}>
        Based on your most recent searches or your location
      </p>

      <Swiper
        className="recommended-trips-swiper"
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >

        
        <SwiperSlide>
          <div className="card h-100">

            <img
              src="https://c.fareportal.com/gcms/cms/global_assets/dest/YVR-rx.webp"
              className="card-img-top"
              alt="Vancouver"
            />

            <div className="card-body">

              <small className="text-muted">
                Similar flights usually cost between $900 – $998.
              </small>

              <div className="d-flex justify-content-between mt-3">

                <div>
                  <h5 className="mb-1">
                    Vancouver
                  </h5>

                  <p className="mb-0 text-muted">
                    DEL – YVR
                  </p>

                  <p className="mb-0 text-muted">
                    Feb 05 – Mar 05
                  </p>
                </div>

                <div className="text-end">
                  <h5 className="mb-1">
                    $877*
                  </h5>

                  <small className="text-muted">
                    Round Trip
                  </small>
                </div>

              </div>

            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="card h-100">

            <img
              src="https://c.fareportal.com/gcms/cms/global_assets/dest/NYC-rx.webp"
              className="card-img-top"
              alt="New York City"
            />

            <div className="card-body">

              <small className="text-muted">
                Similar flights usually cost between $900 – $998.
              </small>

              <div className="d-flex justify-content-between mt-3">

                <div>
                  <h5 className="mb-1">
                    New York City
                  </h5>

                  <p className="mb-0 text-muted">
                    DEL – NYC
                  </p>

                  <p className="mb-0 text-muted">
                    Oct 26 – Apr 19
                  </p>
                </div>

                <div className="text-end">
                  <h5 className="mb-1">
                    $665*
                  </h5>

                  <small className="text-muted">
                    Round Trip
                  </small>
                </div>

              </div>

            </div>
          </div>
        </SwiperSlide>


        
        <SwiperSlide>
          <div className="card h-100">

            <img
              src="https://c.fareportal.com/gcms/cms/global_assets/dest/NYC-rx.webp"
              className="card-img-top"
              alt="New York City"
            />

            <div className="card-body">

              <small className="text-muted">
                Similar flights usually cost between $900 – $998.
              </small>

              <div className="d-flex justify-content-between mt-3">

                <div>
                  <h5 className="mb-1">
                    New York City
                  </h5>

                  <p className="mb-0 text-muted">
                    DEL – NYC
                  </p>

                  <p className="mb-0 text-muted">
                    Oct 25 – Apr 18
                  </p>
                </div>

                <div className="text-end">
                  <h5 className="mb-1">
                    $719*
                  </h5>

                  <small className="text-muted">
                    Round Trip
                  </small>
                </div>

              </div>

            </div>
          </div>
        </SwiperSlide>


      
        <SwiperSlide>
          <div className="card h-100">

            <img
              src="https://c.fareportal.com/gcms/cms/global_assets/dest/SFO-rx.webp"
              className="card-img-top"
              alt="San Francisco"
            />

            <div className="card-body">

              <small className="text-muted">
                Similar flights usually cost between $900 – $998.
              </small>

              <div className="d-flex justify-content-between mt-3">

                <div>
                  <h5 className="mb-1">
                    San Francisco
                  </h5>

                  <p className="mb-0 text-muted">
                    DEL – SFO
                  </p>

                  <p className="mb-0 text-muted">
                    Mar 12 – Apr 16
                  </p>
                </div>

                <div className="text-end">
                  <h5 className="mb-1">
                    $799*
                  </h5>

                  <small className="text-muted">
                    Round Trip
                  </small>
                </div>

              </div>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </section>
  );
}