export default function Home() {
  return (
    <div className="grid grid-rows-[3fr_2fr] h-screen">
      <div className="grid grid-cols-2 border-b border-gray-400">
        <div className="border-r border-gray-400 p-4">Top Div 1</div>
        <div className="p-4">Top Div 2</div>
      </div>

      <div className="p-4">Bottom Div</div>
    </div>
  );
}
