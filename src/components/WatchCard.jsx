const WatchCard = ({ imgURL, changeHeroWatchImage, heroWatchImg }) => {
  const handleClick = () => {
    if (imgURL.bigWatch !== heroWatchImg) {
      changeHeroWatchImage(imgURL.bigWatch)
    }
  }

  return (
    <div className={`border-2 rounded-[1.7rem] ${imgURL.bigWatch === heroWatchImg ? 'border-rolex-green' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className="bg-center bg-cover flex justify-center items-center max-sm:p-4 sm:h-40 rounded-xl sm:w-40">
        <img className="object-contain" src={imgURL.thumbnail} alt="Shoe Collection" height="130" />
      </div>
    </div>
  )
}

export default WatchCard