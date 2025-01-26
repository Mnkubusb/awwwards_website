"use client"

interface ButtonProps {
    id:string,
    title:string,
    leftIcon?: React.ReactNode
    className?: string
    rightIcon?: React.ReactNode
}
const Button = ({ id, title, leftIcon, rightIcon , className }:ButtonProps) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden hover:text-black hover:bg-violet-100 rounded-full bg-violet-50 px-6 text-black py-3 font-medium transition-all ` + className} >
      {leftIcon}
      <span className='relative inline-flex overflow-hidden font-circular-web text-xs mb-[1px] uppercase'>
        <div>
          {title}
        </div>
      </span>
      {rightIcon}
    </button>
  )
}

export default Button
