"use client";

import { Button, Checkbox, Label, Modal, TextInput, FileInput } from "flowbite-react";
import { useState } from "react";

export default function LoginModal() {
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [picture, setPicture] = useState(null);

    function onCloseLoginModal() {
        setOpenLoginModal(false);
        setEmail('');
    }

    function onCloseRegisterModal() {
        setOpenRegisterModal(false);
    }
    const handleLogin = (email, password) => {
        alert(`Email: ${email}\nPassword: ${password}`);
        console.log(email, password);

    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic for registration here
        console.log({
            name, email, phone, address, dob, password, confirmPassword, picture
        });
    };

    return (
        <>
            {/* Login Modal Button */}
            <Button color="gray" className="bg-gray-400 hover:bg-black hover:text-cyan-50" onClick={() => setOpenLoginModal(true)}>
                Login
            </Button>

            {/* Login Modal */}
            <Modal show={openLoginModal} className="bg-gray-400" size="md" onClose={onCloseLoginModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-medium text-gray-900 dark:text-white">User Login</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput id="password" type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                Lost Password?
                            </a>
                        </div>
                        <div className="w-full">
                            <Button color="pink" className="bg-gray-400 hover:bg-black hover:text-cyan-50"
                                onClick={() => handleLogin(email, password)}
                            >
                                Log in to your account
                            </Button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?&nbsp;
                            <a
                                href="#"
                                className="text-cyan-700 hover:underline dark:text-cyan-500"
                                onClick={() => {
                                    setOpenLoginModal(false);
                                    setOpenRegisterModal(true);
                                }}
                            >
                                Create account
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Register Modal */}
            <Modal show={openRegisterModal} className="bg-gray-400" size="md" onClose={onCloseRegisterModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Create an account</h3>
                        <form onSubmit={handleRegisterSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Full Name */}
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="name" value="Full Name" />
                                    </div>
                                    <TextInput
                                        id="name"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="email" value="Your email" />
                                    </div>
                                    <TextInput
                                        id="email"
                                        placeholder="name@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="phone" value="Phone Number" />
                                    </div>
                                    <TextInput
                                        id="phone"
                                        placeholder="Your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Address */}
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="address" value="Address" />
                                    </div>
                                    <TextInput
                                        id="address"
                                        placeholder="Your address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Date of Birth */}
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="dob" value="Date of Birth" />
                                    </div>
                                    <TextInput
                                        id="dob"
                                        type="date"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Profile Picture */}
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="picture" value="Profile Picture" />
                                    </div>
                                    <FileInput
                                        id="picture"
                                        onChange={(e) => setPicture(e.target.files[0])}
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="password" value="Your password" />
                                    </div>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        placeholder="********"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="confirmPassword" value="Confirm Password" />
                                    </div>
                                    <TextInput
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="********"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Checkbox for terms */}
                            <div className="flex items-center gap-2 mt-4">
                                <Checkbox id="terms" required />
                                <Label htmlFor="terms">
                                    I agree to the terms and conditions
                                </Label>
                            </div>

                            {/* Register Button */}
                            <div className="w-full mt-4">
                                <Button color="pink" className="bg-gray-400 hover:bg-black hover:text-cyan-50" type="submit">
                                    Create Account
                                </Button>
                            </div>
                        </form>

                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300 mt-4">
                            Already registered?&nbsp;
                            <a
                                href="#"
                                className="text-cyan-700 hover:underline dark:text-cyan-500"
                                onClick={() => {
                                    setOpenRegisterModal(false);
                                    setOpenLoginModal(true);
                                }}
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
