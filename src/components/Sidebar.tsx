"use client";
import { Camera } from "@/app/svg/Camera";
import { Music } from "@/app/svg/Music";
import { TextSVG } from "@/app/svg/Text";
import { URL } from "@/app/svg/URL";
import { VideoCam } from "@/app/svg/VideoCam";
import { useTab } from "@/context/TabContext";

export default function Sidebar() {
    const { setActiveTab } = useTab();
    return (
        <div className="flex flex-col justify-center items-center gap-12 pt-16">
            <div className="flex flex-col justify-center items-center" onClick={() => (setActiveTab(1))}>
                <Camera />
                <p className="font-thin">Images</p>
            </div>
            <div className="flex flex-col justify-center items-center" onClick={() => (setActiveTab(2))}>
                <VideoCam />
                <p className="font-thin">Videos</p>
            </div>
            <div className="flex flex-col justify-center items-center" onClick={() => (setActiveTab(3))}>
                <Music />
                <p className="font-thin">Audio</p>
            </div>
            <div className="flex flex-col justify-center items-center" onClick={() => (setActiveTab(4))}>
                <TextSVG />
                <p className="font-thin">Text</p>
            </div>
            <div className="flex flex-col justify-center items-center" onClick={() => (setActiveTab(5))}>
                <URL />
                <p className="font-thin">URL</p>
            </div>
        </div>
    );
}
