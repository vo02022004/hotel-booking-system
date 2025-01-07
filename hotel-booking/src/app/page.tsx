'use client'
import 'flowbite/dist/flowbite.css';  // Nhập CSS của Flowbite
import Image from "next/image";
import IMG_15372 from '@/app/assets/images/carousel/IMG_15372.png'
import IMG_40905 from '@/app/assets/images/carousel/IMG_40905.png'
import IMG_55677 from '@/app/assets/images/carousel/IMG_55677.png'
import IMG_62045 from '@/app/assets/images/carousel//IMG_62045.png'
import IMG_93127 from '@/app/assets/images/carousel//IMG_93127.png'
// room
import IMG_11892 from '@/app/assets/images/rooms/IMG_11892.png'
import IMG_39782 from '@/app/assets/images/rooms/IMG_39782.png'
import IMG_42663 from '@/app/assets/images/rooms/IMG_42663.png'
import IMG_65019 from '@/app/assets/images/rooms/IMG_65019.png'
import Header from '@/app/components/Header'
import RoomCard from '@/app/components/RoomCard'
import { Navbar, Button, Modal, Carousel } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
const roomData = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "$200/night",
    description: "Spacious room with modern amenities.",
    image: IMG_11892, // Một hình ảnh đại diện cho phòng,
    rating: 2
  },
  {
    id: 2,
    name: "Suite Room",
    price: "$300/night",
    description: "Luxurious suite with premium facilities. lorem sdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    image: IMG_39782,
    rating: 5

  },
  {
    id: 3,
    name: "Family Room",
    price: "$250/night",
    description: "Perfect for family stays, with multiple beds.",
    image: IMG_42663,
    rating: 2

  },

];

export default function Home() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Header />
      <div className="relative">
        {/* Phần carousel */}
        <div className="h-80 sm:h-72 md:h-64 xl:h-64 2xl:h-96 mx-6">
          <Carousel pauseOnHover>
            <Image src={IMG_15372} alt="Image 1" />
            <Image src={IMG_40905} alt="..." />
            <Image src={IMG_55677} alt="..." />
            <Image src={IMG_62045} alt="..." />
            <Image src={IMG_93127} alt="..." />
            <Image src={IMG_15372} alt="..." />
          </Carousel>
        </div>

        {/* Phần div đè lên carousel */}
        <div className="absolute lg:top-60 lg:mt-20 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-[90vw] shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 w-[90vw]  bg-gray-50 mx-auto px-20 rounded-md">
            <div className="w-[70vw] grid pr-10 py-10">
              <div className='text-2xl mb-4' > Check Booking Availability</div>

              <div className="grid lg:grid-cols-4 md:grid-cols-2   gap-4 items-center">
                {/* Cột 1: Chọn ngày */}
                <div>
                  <label htmlFor="date" className="block">Check-in</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="border p-2 w-full rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block">Check-out</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="border p-2 w-full rounded-md"
                  />
                </div>

                {/* Cột 3: Chọn năm */}
                <div>
                  <label htmlFor="year" className="block">Adult</label>
                  <select id="year" name="year" className="border p-2 w-full rounded-md">
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>

                {/* Cột 4: Chọn thông tin */}
                <div>
                  <label htmlFor="info" className="block">Children</label>
                  <select id="info" name="info" className="border p-2 w-full rounded-md">
                    <option value="option1">Lựa chọn 1</option>
                    <option value="option2">Lựa chọn 2</option>
                    <option value="option3">Lựa chọn 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-[10vw] md:mt-10 ml-auto px-10 py-10 flex justify-center items-end mt-[-40px]">
              <div className="flex lg:items-end md:items-center justify-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div className="flex  justify-center h-full mb-10 text-3xl md:mt-72 mt-96 lg:mt-6  animate-bounce">
        Out Room
      </div>
      <div className="flex justify-center items-center w-full h-full p-0 m-0">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-10 gap-y-8 lg:mx-8 lg:px-0 p-0 justify-items-center items-center">
          {roomData.map((room, index) => (
            <div key={index} className="w-full min-w-0 mb-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"> {/* Thêm hiệu ứng đổ bóng */}
              <RoomCard room={room} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button color='gray' className=" text-black py-2 px-4 rounded hover:bg-blue-600 hover:text-white hover:border-0 transitionborder-solid border-2 border-slate-950">
          More Rooms
        </button>
      </div>

    </>
  );
}
