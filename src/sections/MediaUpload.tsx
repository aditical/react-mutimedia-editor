"use client";

import FileUpload from "@/components/ImageStorage/ImageStorage";
import { useTab } from "@/context/TabContext";

export default function MediaUpload() {
    const { activeTab } = useTab();
    const handleTabContents = () => {
        switch (activeTab) {
            case 1:
                return <FileUpload type="image" />;
            case 2:
                return <FileUpload type="video" />;
            case 3:
                return <div>Audio</div>;
            case 4:
                return <div>Text</div>;
            case 5:
                return <div>URL</div>;
            default:
                return <FileUpload type="image" />;
        }
    }
    return (
        <div className="">
            {handleTabContents()}
        </div>
    );
}