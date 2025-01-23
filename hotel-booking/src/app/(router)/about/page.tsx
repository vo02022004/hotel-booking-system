'use client'
import Image from "next/image";

import about from '@/app/assets/images/about/about.jpg'
import customers from '@/app/assets/images/about/customers.svg'
import hotel from '@/app/assets/images/about/hotel.svg'
import rating from '@/app/assets/images/about/rating.svg'
import IMG_17352 from '@/app/assets/images/about/IMG_17352.jpg'
import Header from '@/app/components/Header'
import ManagementTeam from '@/app/components/ManagementTeam'
import Footer from '@/app/components/Footer'
import { HR } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
const managementTeam = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager",
    image: IMG_17352,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: IMG_17352,
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Software Developer",
    image: IMG_17352,
  },
  {
    id: 4,
    name: "Emily White",
    role: "Marketing Lead",
    image: IMG_17352,
  },
  {
    id: 4,
    name: "Emily White",
    role: "Marketing Lead",
    image: IMG_17352,
  },
  {
    id: 4,
    name: "Emily White",
    role: "Marketing Lead",
    image: IMG_17352,
  },
  {
    id: 4,
    name: "Emily White",
    role: "Marketing Lead",
    image: IMG_17352,
  },
];

export default function Facilities() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Header />

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tiêu đề */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-wider">About Us</h2>

            <hr className="w-1/12 border-t- border-gray-300 mx-auto" />
            <p className="text-gray-600 mt-4 text-center mx-36">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
              incidunt odio quos dolore commodi repudiandae tenetur consequuntur et
              similique asperiores.
            </p>
          </div>
          {/* Nội dung */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Cột văn bản */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Lorem ipsum dolor sit</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                minima sapiente aliquam sed officia nostrum fuga? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Omnis minima sapiente
                aliquam sed officia nostrum fuga?
              </p>
            </div>

            {/* Cột hình ảnh */}
            <div className="flex justify-center">
              <Image
                src={about}
                alt="Profile Image"
                className="rounded-lg shadow-lg"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center mx-32 mb-6 mt-10">


          <div className="text-center flex flex-col items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-4 relative group border-t-4 border-transparent hover:border-blue-500">
            {/* Hình ảnh */}
            <Image src={hotel} alt="Water Heater Icon" width={100} height={100} />
            {/* Tên */}
            <h4 className="mt-4 font-bold text-lg">100+ ROOMS</h4>
            {/* Mô tả */}
          </div>

          <div className="text-center flex flex-col items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-4 relative group border-t-4 border-transparent hover:border-blue-500">
            {/* Hình ảnh */}
            <Image src={customers} alt="Television Icon" width={100} height={100} />
            {/* Tên */}
            <h4 className="mt-4 font-bold text-lg">200+ CUSTOMERS</h4>
            {/* Mô tả */}
          </div>

          <div className="text-center flex flex-col items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-4 relative group border-t-4 border-transparent hover:border-blue-500">
            {/* Hình ảnh */}
            <Image src={rating} alt="Massage Icon" width={100} height={100} />
            {/* Tên */}
            <h4 className="mt-4 font-bold text-lg">150+ REVIEWS</h4>
            {/* Mô tả */}
          </div>
        </div>
        <div className="flex  justify-center h-full mb-10 text-3xl md:mt-72 mt-20 lg:mt-20 animate-bounce">
          MANAGEMENT TEAM
        </div>

        <ManagementTeam team={managementTeam} />
      </section>
      <Footer />
    </>
  );
}
