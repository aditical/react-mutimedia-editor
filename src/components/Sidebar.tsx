"use client";
import { Camera } from "@/app/svg/Camera";
import { CameraFill } from "@/app/svg/CameraFill";
import { Music } from "@/app/svg/Music";
import { TextSVG } from "@/app/svg/Text";
import { URL } from "@/app/svg/URL";
import { VideoCam } from "@/app/svg/VideoCam";
import { useTab } from "@/context/TabContext";

const tabs = [
    { id: 1, label: "Images", Icon: Camera, ActiveIcon: CameraFill },
    { id: 2, label: "Videos", Icon: VideoCam },
    { id: 3, label: "Audio", Icon: Music },
    { id: 4, label: "Text", Icon: TextSVG },
    { id: 5, label: "URL", Icon: URL },
];

export default function Sidebar() {
    const { activeTab, setActiveTab } = useTab();

    return (
        <div className="flex flex-col items-center gap-6 pt-16">
            {tabs.map(({ id, label, Icon }) => (
                <div
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className="w-24 h-24 flex flex-col items-center justify-center cursor-pointer rounded"
                >
                    <div className={`p-2 ${activeTab === id ? "bg-[#484848] rounded-[10px]" : ""
                        }`}>
                        <Icon />
                    </div>
                    <p className="font-thin text-sm mt-1">{label}</p>
                </div>
            ))}
        </div>
    );
}
