import { Camera } from "@/app/svg/Camera";
import { Music } from "@/app/svg/Music";
import { TextSVG } from "@/app/svg/Text";
import { URL } from "@/app/svg/URL";
import { VideoCam } from "@/app/svg/VideoCam";

export default function Sidebar() {
    return (
        <div className="flex flex-col justify-center items-center gap-12 pt-16">
            <div className="flex flex-col justify-center items-center">
                <VideoCam />
                <p className="font-thin">Videos</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Camera />
                <p className="font-thin">Images</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Music />
                <p className="font-thin">Audio</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <TextSVG />
                <p className="font-thin">Text</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <URL />
                <p className="font-thin">URL</p>
            </div>
        </div>
    );
}
