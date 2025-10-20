'use client'

import React, { useState } from "react";
import {
    Home,
    Lightbulb,
    Thermometer,
    Music,
    Lock,
    Tv,
    Fan,
    Sun,
    Moon
} from "lucide-react";

const Hero = () => {
    const [livingRoom, setLivingRoom] = useState(false);
    const [bedroom, setBedroom] = useState(false);
    const [climate, setClimate] = useState(false);
    const [music, setMusic] = useState(false);
    const [doorLock, setDoorLock] = useState(false);
    const [tv, setTv] = useState(false);
    const [fan, setFan] = useState(false);
    const [blinds, setBlinds] = useState(false);

    const devices = [
        { name: "Living Room", state: livingRoom, set: setLivingRoom, icon: Lightbulb },
        { name: "Bedroom", state: bedroom, set: setBedroom, icon: Moon },
        { name: "Climate", state: climate, set: setClimate, icon: Thermometer },
        { name: "Speakers", state: music, set: setMusic, icon: Music },
        { name: "Door Lock", state: doorLock, set: setDoorLock, icon: Lock },
        { name: "TV", state: tv, set: setTv, icon: Tv },
        { name: "Fan", state: fan, set: setFan, icon: Fan },
        { name: "Blinds", state: blinds, set: setBlinds, icon: Sun },
    ];

    const toggle = (setFn: React.Dispatch<React.SetStateAction<boolean>>) => {
        setFn((prev) => !prev);
    };

    return (
        <div className="">
            <div className="mx-auto px-4 pt-16 lg:pt-24">
                <div className="text-center mb-16">
                    <h1 className="font-bold text-4xl lg:text-8xl text-secondary mb-4">
                        Connect Beyond.
                    </h1>
                </div>

                <div className="dahboard bg-secondary p-2 pb-0 lg:mx-24 rounded-t-3xl">
                    <div className="bg-gray-100 rounded-t-3xl overflow-hidden">
                        <div className="bg-primary px-6 py-4 flex justify-between items-center rounded-t-3xl">
                            <div className="flex items-center space-x-3">
                                <div className="flex flex-col space-y-0.5">
                                    <div className="w-6 h-0.5 bg-white rounded"></div>
                                    <div className="w-6 h-0.5 bg-white rounded"></div>
                                    <div className="w-6 h-0.5 bg-white rounded"></div>
                                </div>
                                <span className="text-white font-semibold text-lg">ECOTONICS Assistant</span>
                            </div>
                            <div className="flex flex-col space-y-0.5">
                                <div className="w-1 h-1 bg-white rounded-full ml-auto"></div>
                                <div className="w-1 h-1 bg-white rounded-full ml-auto"></div>
                                <div className="w-1 h-1 bg-white rounded-full ml-auto"></div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-6">
                            <div className="mb-6">
                                <div className="flex items-center space-x-2 mb-3 px-2">
                                    <Home className="w-4 h-4 text-gray-600" />
                                    <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                        Living Room
                                    </h2>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {devices.slice(0, 4).map((device, i) => {
                                        const Icon = device.icon;
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => toggle(device.set)}
                                                className={`p-4 rounded-xl transition-all duration-300 text-left ${device.state
                                                    ? "bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg"
                                                    : "bg-white shadow-md hover:shadow-lg"
                                                    }`}
                                            >
                                                <div className="flex items-start justify-between mb-3">
                                                    <Icon
                                                        className={`w-6 h-6 ${device.state ? "text-white" : "text-gray-400"
                                                            }`}
                                                    />
                                                </div>
                                                <p
                                                    className={`text-sm font-semibold mb-0.5 ${device.state ? "text-white" : "text-gray-800"
                                                        }`}
                                                >
                                                    {device.name}
                                                </p>
                                                <p
                                                    className={`text-xs ${device.state ? "text-white/90" : "text-gray-500"
                                                        }`}
                                                >
                                                    {device.state ? "On" : "Off"}
                                                </p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center space-x-2 mb-3 px-2">
                                    <Moon className="w-4 h-4 text-gray-600" />
                                    <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                        Bedroom
                                    </h2>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {devices.slice(4, 8).map((device, i) => {
                                        const Icon = device.icon;
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => toggle(device.set)}
                                                className={`p-4 rounded-xl transition-all duration-300 text-left ${device.state
                                                    ? "bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg"
                                                    : "bg-white shadow-md hover:shadow-lg"
                                                    }`}
                                            >
                                                <div className="flex items-start justify-between mb-3">
                                                    <Icon
                                                        className={`w-6 h-6 ${device.state ? "text-white" : "text-gray-400"
                                                            } ${device.name === "Fan" && device.state ? "animate-spin" : ""}`}
                                                        style={
                                                            device.name === "Fan" && device.state
                                                                ? { animationDuration: "2s" }
                                                                : {}
                                                        }
                                                    />
                                                </div>
                                                <p
                                                    className={`text-sm font-semibold mb-0.5 ${device.state ? "text-white" : "text-gray-800"
                                                        }`}
                                                >
                                                    {device.name}
                                                </p>
                                                <p
                                                    className={`text-xs ${device.state ? "text-white/90" : "text-gray-500"
                                                        }`}
                                                >
                                                    {device.state ? "On" : "Off"}
                                                </p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mt-8">
                                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                    <p className="text-2xl font-bold text-gray-800">
                                        {devices.filter((d) => d.state).length}
                                    </p>
                                    <p className="text-gray-500 text-xs mt-1">Active</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                    <p className="text-2xl font-bold text-green-500">22°C</p>
                                    <p className="text-gray-500 text-xs mt-1">Climate</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                    <p className="text-2xl font-bold text-blue-500">18%</p>
                                    <p className="text-gray-500 text-xs mt-1">Saved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
