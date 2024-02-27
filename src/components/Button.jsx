const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor, fullwidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}`
      : "bg-rolex-green border-rolex-green text-white"} ${fullwidth && 'w-full'}`}>
      {label}
      {iconUrl && <img className="ml-2 rounded-full w-5 h-5" src={iconUrl} alt="Arrow Right Icon"/>}
    </button>
  )
}

export default Button