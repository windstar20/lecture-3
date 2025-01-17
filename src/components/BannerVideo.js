import React, {useEffect} from 'react'
import video from '../assets/banner-video_compress.mp4'
import videoWebm from '../assets/banner-video_compress.webm'
import FontFaceObserver from 'fontfaceobserver'

function BannerVideo() {



	const [isFontReady, setIsFontReady] = React.useState(true)

	/*useEffect(() => {
		const font = new FontFaceObserver('BMYEONSUNG');
		font.load().then(() => {
			setIsFontReady(true);
		})

	}, [])*/


	return (
		<div className="BannerVideo w-full h-screen overflow-hidden relative bg-texture">
			<div className="absolute h-screen w-full left-1/2">
				<video className="absolute translateX--1/2 h-screen max-w-none min-w-screen -z-1 bg-black min-w-full min-h-screen" autoPlay loop muted>
					<source src={videoWebm} type="video/webm" />
					<source src={video} type="video/mp4" />
				</video>
			</div>
			<div className="w-full h-full flex justify-center items-center" style={{opacity : isFontReady ? 1 : 0, transition: 'opacity 1.5s ease'}}>
				<div className="text-white text-center">
					<div className="text-6xl leading-none font-semibold">KEEP</div>
					<div className="text-6xl leading-none font-semibold">CALM</div>
					<div className="text-3xl leading-loose">AND</div>
					<div className="text-6xl leading-none font-semibold">RIDE</div>
					<div className="text-5xl leading-tight font-semibold">LONGBOARD</div>
				</div>
			</div>
		</div>
	)
}

export default BannerVideo
