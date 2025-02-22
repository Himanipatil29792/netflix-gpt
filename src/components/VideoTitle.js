

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-full aspect-video px-24 pt-[18%] absolute text-white bg-gradient-to-r from-black">
    <h1 className="font-bold text-6xl">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>

    <div>
        <button className="bg-red-500 text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-gray-50"> ⏯️ Play</button>
        <button className="mx-2 bg-red-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg"> More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle;