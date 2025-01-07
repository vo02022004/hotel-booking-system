import Image from "next/image";
// import exampleRoomImage from "@/app/assets/images/room-example.jpg";
import IMG_11892 from '@/app/assets/images/rooms/IMG_11892.png'
import { IoIosStar } from "react-icons/io";

export default function RoomCard({ room }) {
    return (
        <div className="flex flex-col w-96 bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105">
            {/* Hình ảnh phòng */}
            <div className="relative w-full h-64">
                <Image
                    src={room.image}
                    alt="Room Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Nội dung chi tiết */}
            <div className="p-6">
                {/* Tiêu đề và mô tả */}
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{room.name}</h2>
                <p className="text-base text-gray-600 mb-4 overflow-hidden whitespace-nowrap text-ellipsis">
                    {room.description}
                </p>
                {/* Rating */}
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, index) => (
                        <IoIosStar
                            key={index}
                            size={24}
                            color={index < room.rating ? "gold" : "lightgray"} // Vàng nếu trong phạm vi rating, xám nếu không
                            className="mr-1"
                        />
                    ))}
                </div>
                {/* Giá và nút đặt phòng */}
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-xl font-bold text-blue-600">{room.price}</span>
                        <span className="text-sm text-gray-500">/night</span>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
                        Book Now
                    </button>
                </div>
            </div>
        </div>

    );
}
