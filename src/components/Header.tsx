export default function Header() {
    return (
        <div className="p-4 w-100">
            ReactVid
            <span className="ml-2 w-100">
                <input type="text" placeholder="Untitled Video" name="videoTitle" className="w-1/6 focus:outline-none focus:border-b-white border-b border-zinc-600 placeholder-zinc-600" />
            </span>
        </div>
    );
}
