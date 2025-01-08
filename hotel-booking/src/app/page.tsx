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
import { Navbar, Button, Modal, Carousel } from "flowbite-react";
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
        <div className="absolute lg:top-60 lg:mt-20 lg:left-1/2 md:left-2/3 left-1/2 -translate-x-1/2 lg:transform lg:-translate-x-1/2 md:-translate-x-2/3 lg:w-[90vw] md:w-[90vw] shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:w-[90vw]  md:w-[90vw] bg-gray-50 mx-auto px-20 rounded-md">
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

                {/* Cột 3: Chọn số lượng người lớn */}
                <div>
                  <label htmlFor="adult" className="block">Adult</label>
                  <select id="adult" name="adult" className="border p-2 w-full rounded-md">
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                    <option value="four">four</option>
                    <option value="five">five</option>
                  </select>
                </div>

                {/* Cột 4: Chọn số lượng trẻ em */}
                <div>
                  <label htmlFor="children" className="block">Children</label>
                  <select id="children" name="children" className="border p-2 w-full rounded-md">
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                    <option value="four">four</option>
                    <option value="five">five</option>
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
        OUT ROOM
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
      <div className="flex justify-center mt-6">
        <button color='gray' className=" text-black py-2 px-4 rounded hover:bg-blue-600 hover:text-white hover:border-0 transitionborder-solid border-2 border-slate-950">
          More Rooms &gt;&gt;&gt;
        </button>
      </div>
      <div className="flex  justify-center h-full mb-10 text-3xl md:mt-72 mt-20 lg:mt-20  animate-bounce">
        OUT FALICITIES
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center mx-32'>
        <div className="text-center flex justify-center items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-2">
          <Image src={wifi} alt="WiFi Icon" width={100} height={100} />
        </div>
        <div className="text-center flex justify-center items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-2">
          <Image src={WaterHeater} alt="Water Heater Icon" width={100} height={100} />
        </div>
        <div className="text-center flex justify-center items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-2">
          <Image src={Television} alt="Television Icon" width={100} height={100} />
        </div>
        <div className="text-center flex justify-center items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-2">
          <Image src={Massage} alt="Massage Icon" width={100} height={100} />
        </div>
        <div className="text-center flex justify-center items-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-6 pb-4 px-2">
          <Image src={Bus} alt="Bus Icon" width={100} height={100} />
        </div>
      </div>

      {/* <div className="flex  justify-center h-full mb-10 text-3xl md:mt-72 mt-96 lg:mt-20  animate-bounce">
        TESTIMONIALS
      </div>
      <div className="h-40 sm:h-36 md:h-32 xl:h-32 2xl:h-48 mx-32 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <Carousel leftControl="" rightControl="">
          <div className="testimonial ml-10">
            <Image src={Television} width={50} alt=''></Image>
            <div className="testimonial-content ">
              <h5>John he</h5>
              <p>This is a great product! Highly recommended.</p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <IoIosStar
                    key={index}
                    size={24}
                    color={index < 2 ? "gold" : "lightgray"} // Vàng nếu trong phạm vi rating, xám nếu không
                    className="mr-1"
                  />
                ))}              </div>
            </div>
          </div>
          <div className="testimonial ml-10">
            <Image src={wifi} width={50} alt=''></Image>
            <div className="testimonial-content ">
              <h5>John he</h5>
              <p>This is a great product! Highly recommended.</p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <IoIosStar
                    key={index}
                    size={24}
                    color={index < 2 ? "gold" : "lightgray"} // Vàng nếu trong phạm vi rating, xám nếu không
                    className="mr-1"
                  />
                ))}              </div>
            </div>
          </div>
        </Carousel>
      </div> */}
      <div className="flex  justify-center h-full mb-10 text-3xl md:mt-72 mt-20 lg:mt-20  animate-bounce">
        REACH US
      </div>
      <div className="lg:mx-32 lg:my-16 md:mx-10 mx-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Google Map */}
          <div className="h-full">
            <iframe
              className="w-full sm:h-64 md:h-72 lg:h-80"

              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.128862013037!2d106.76748407451835!3d10.8778022573167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d87dddcc59bd%3A0x7549c0e9ca9ecbb1!2zxJDGsOG7nW5nIHPhu5EgNiwgTGluaCBYdcOibiwgVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1736249780843!5m2!1svi!2s" width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Column - Contact Information */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="text-lg text-gray-700">
              Feel free to reach out to us at the following locations:
            </p>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>123 Main St, Cityville, State, ZIP</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  );
}
