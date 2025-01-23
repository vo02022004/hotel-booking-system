'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";

// Các hình ảnh team members

export default function ManagementTeam({ team }) {
    return (
        <div className="py-12 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="mySwiper"
                >
                    {
                        team.map((menber, index) => (

                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
                                    <Image
                                        src={menber.image}
                                        alt="Team Member 1"
                                        className="w-32 h-32 rounded-full mb-4 object-cover"
                                        width={128}
                                        height={128}
                                    />
                                    <h4 className="font-bold text-lg">{menber.name}</h4>
                                    <p className="text-gray-600 text-sm">{menber.role}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    {/* Slide 1 */}
                </Swiper>
            </div>
        </div>
    );
}
