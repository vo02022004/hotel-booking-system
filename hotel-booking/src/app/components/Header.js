"use client";
import Link from "next/link";
import { Button, Navbar, Input } from "flowbite-react";  // Không cần import 'Input' từ 'postcss'
import LoginModal from '@/app/components/LoginModal'
export default function Header() {
    return (
        <Navbar fluid rounded className="lg:mx-20 py-5 bg-neutral-50">
            <Navbar.Brand href="/">
                <span className="text-4xl font-bold text-gray-800 transform skew-y-6 skew-x-12">
                    VT HOTEL
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {/* Thanh tìm kiếm thay cho nút Get started */}
                <div className="flex items-center">
                    {/* <input
                        placeholder="Tìm kiếm..."
                        className="border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 rounded-full"
                    /> */}
                    {/* <Button className=" ml-2 bg-green-400" color="">
                        Tìm kiếm
                    </Button> */}
                    <LoginModal />
                </div>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/" className="text-gray-500 hover:text-blue-500 hover:bg-blue-500 active:text-red-600 p-2">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">Rooms</Navbar.Link>
                <Navbar.Link href="/facilities">Facilities</Navbar.Link>
                <Navbar.Link href="contact">Contact</Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
