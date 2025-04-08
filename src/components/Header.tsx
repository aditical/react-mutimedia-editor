export default function Header() {
    return (
        <div className="p-2 w-100">
            {/* React Video Editor */}
            <span className="ml-2 w-100">
                <input type="text" placeholder="Untitled Video" name="videoTitle" className="w-1/6 focus:outline-none focus:border-b-white border-b border-gray-400 p-2" />
            </span>
        </div>
    );
}
