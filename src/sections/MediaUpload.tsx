"use client";

import ImageStorage from "@/components/ImageStorage/ImageStorage";
import { useTab } from "@/context/TabContext";

export default function MediaUpload() {
    const { activeTab } = useTab();
    const handleTabContents = () => {
        switch (activeTab) {
            case 1:
                return <ImageStorage />;
            case 2:
                return <div>Video</div>;
            case 3:
                return <div>Audio</div>;
            case 4:
                return <div>Text</div>;
            case 5:
                return <div>URL</div>;
            default:
                return <ImageStorage />;
        }
    }
    return (
        <div className="">
            {handleTabContents()}
        </div>
    );
}