import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
} : {
    title: string, icon: React.ReactNode, position: string, handleClick?:() => void, otherClasses?: string,
} ) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg md:w-60 md:mt-10 p-[1px] focus:outline-none"  onClick={handleClick}>
  <span className="absolute inset-[-1000%] animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#902923_0%,#A22C29_50%,white_100%)]" />
  <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-background px-3 py-1 text-sm font-medium text-foreground backdrop-blur-3xl gap-3 uppercase ${otherClasses}`}>
    {position == 'left' && icon }
    {title}
    {position == 'right' && icon }
  </span>
</button>
  )
}

export default MagicButton