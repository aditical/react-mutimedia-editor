import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MediaPlayer from "@/sections/MediaPlayer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-[5%_1fr] h-screen">
        <div className="p-4 border border-white-400"><Sidebar /></div>
        <div className="grid grid-cols-[25%_2fr] h-screen">
          <div className="p-4 border border-gray-400">Side Div 2</div>
          <div className="grid grid-rows-[3fr_2fr]">
            <div className="p-4 border border-gray-400">
              <MediaPlayer />
            </div>
            <div className="p-4 border border-gray-400">Bottom Div 2</div>
          </div></div>
      </div>
    </div>
  );
}
