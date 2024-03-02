const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 px-10 py-16 rounded-[20px] shadow-3xl w-full gap-2.5 p-6 sm:w-[350px] sm:min-w-[350px]" key={label}>
      <div className="bg-rolex-green flex items-center justify-center rounded-full h-11 w-11">
        <img src={imgURL} alt={label} height="24" width="24" />
      </div>
      <h3 className="font-bold font-palanquin leading-normal mt-5 text-3xl">{label}</h3>
      <p className="break-words font-montserrat leading-normal mt-3 text-lg text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard