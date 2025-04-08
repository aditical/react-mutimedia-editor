import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MediaPlayer from "@/sections/MediaPlayer";
import MediaUpload from "@/sections/MediaUpload";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="w-[5%] p-4 border border-white-400 overflow-auto">
          <Sidebar />
        </div>
        <div className="grid grid-cols-[25%_2fr] flex-1 overflow-hidden">
          <div className="p-4 border border-gray-400 overflow-auto">
            <MediaUpload />
          </div>
          <div className="grid grid-rows-[3fr_2fr] overflow-hidden">
            <div className="p-4 border border-gray-400 overflow-auto">
              <MediaPlayer />
            </div>
            <div className="p-4 border border-gray-400 overflow-auto">
              Bottom Div 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
