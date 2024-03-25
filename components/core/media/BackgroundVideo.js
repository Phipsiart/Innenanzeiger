export default function BackgroundVideo({url}){
    return(
        <>
        <div className="bg-video">
  <video src={url} autoPlay={true} muted={true} loop={true} ></video>
</div>
        </>
    )
}