import React from 'react'
import SliderComponent from './SliderComponent'
import request from './APIFILE'

const Slider = () => {
  return (
    <div>
      <SliderComponent title='Popular' fetchUrl={request.reqPopular} />
      <SliderComponent title='Top Rated' fetchUrl={request.reqTopRated} />
      <SliderComponent title='Up Coming' fetchUrl={request.reqUpcoming} />
      <SliderComponent title='Latest' fetchUrl={request.reqLatest} />
      <SliderComponent title='Playing' fetchUrl={request.reqPlaying} />
      <SliderComponent title='Trending' fetchUrl={request.reqTrending} />
    </div>
  )
}

export default Slider
