
export default function LegalFooter() {
  return (
    <div className="w-full border-t mt-8 pt-4">
      {/* Desktop Version */}
      <span className='hidden md:flex gap-1 items-center justify-center mb-2 text-xs'>
        <p>Imperial Media Solutions</p>
        <p>&copy;</p>
        <p>{new Date().getFullYear()}</p>
        <p className="px-2">|</p>
        <p>All rights reserved</p>
      </span>
      {/* Mobile Version */}
      <span className='flex md:hidden flex-col items-center justify-center mb-2 text-xs'>
        <span className="flex gap-1 items-center justify-center text-xs">
          <p>Imperial Media Solutions</p>
          <p>&copy;</p>
          <p>{new Date().getFullYear()}</p>
        </span>
        <p>All rights reserved</p>
      </span>
    </div>
  )
}
