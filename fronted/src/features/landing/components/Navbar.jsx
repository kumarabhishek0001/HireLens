

const Navbar = () => {
  return (
    <div className="p-4 px-5 flex justify-between items-center shadow-2xs">
        <div className="font-fancy text-2xl font-semibold">hireLense</div>
        <div className="flex gap-7 text-[#4a505a] text-sm translate-x-6">
            <p>Features</p>
            <p>How it works</p>
            <p>Reviews</p>
            <p>Pricing</p>
        </div>
        <div className="flex gap-4 text-sm">
            <button className="text-[#4a505a]">Sign in</button>
            <button className="px-2 py-1 rounded bg-primary text-white">Get Started</button>
        </div>
    </div>
  )
}

export default Navbar