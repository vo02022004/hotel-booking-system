'use client'
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
// facilities
import wifi from '@/app/assets/images/facilities/wifi.svg'
import WaterHeater from '@/app/assets/images/facilities/IMG_27079.svg'
import Television from '@/app/assets/images/facilities/IMG_41622.svg'
import Massage from '@/app/assets/images/facilities/IMG_47816.svg'
import Bus from '@/app/assets/images/facilities/IMG_96423.svg'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import RoomCard from '@/app/components/RoomCard'
import { Navbar, Button, Modal, Carousel, HR } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { IoIosStar } from 'react-icons/io';
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

const Facilities = () => {
  const [openModal, setOpenModal] = useState<true>(true);

  return (
    <>
      <Header />

      <div className="flex  justify-center h-full mb-10 text-3xl md:mt-72 mt-20 lg:mt-20  animate-bounce">
        OUT FACILITIES
      </div>
      <HR.Trimmed />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center mx-32">


        <div className="text-center flex flex-col items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-4 relative group border-t-4 border-transparent hover:border-blue-500">
          {/* Hình ảnh */}
          <Image src={WaterHeater} alt="Water Heater Icon" width={100} height={100} />
          {/* Tên */}
          <h4 className="mt-4 font-bold text-lg">Water Heater</h4>
          {/* Mô tả */}
          <p className="text-sm text-gray-500 mt-2">Hot water available 24/7.</p>
        </div>

        <div className="text-center flex flex-col items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-4 relative group border-t-4 border-transparent hover:border-blue-500">
          {/* Hình ảnh */}
          <Image src={Television} alt="Television Icon" width={100} height={100} />
          {/* Tên */}
          <h4 className="mt-4 font-bold text-lg">Television</h4>
          {/* Mô tả */}
          <p className="text-sm text-gray-500 mt-2">Flat-screen TV with cable channels.</p>
        </div>

        <div className="text-center flex flex-col items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-4 relative group border-t-4 border-transparent hover:border-blue-500">
          {/* Hình ảnh */}
          <Image src={Massage} alt="Massage Icon" width={100} height={100} />
          {/* Tên */}
          <h4 className="mt-4 font-bold text-lg">Massage Service</h4>
          {/* Mô tả */}
          <p className="text-sm text-gray-500 mt-2">Relax with professional massage services.</p>
        </div>

        <div className="text-center flex flex-col items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-4 relative group border-t-4 border-transparent hover:border-blue-500">
          {/* Hình ảnh */}
          <Image src={Bus} alt="Bus Icon" width={100} height={100} />
          {/* Tên */}
          <h4 className="mt-4 font-bold text-lg">Shuttle Bus</h4>
          {/* Mô tả */}
          <p className="text-sm text-gray-500 mt-2">Free shuttle bus for guests.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Facilities;