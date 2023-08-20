import little_fire from 'img/little_fire.svg'
import cardInfo from 'utils/cardArray'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow } from 'swiper/modules'
import './Slider.scss'
import SliderCard from './SliderCard'

const Slider = () => {
    return (
        <section className="slider">
            <div className="title_slider">
                <img src={little_fire} alt="little fire man" />
                <h3>Особливості банку</h3>
            </div>
            <div className="swiper_slider">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                >
                    {cardInfo.map(({ id, img, title, describe }) => (
                        <SwiperSlide key={id}>
                            <SliderCard
                                img={img}
                                title={title}
                                describe={describe}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default Slider
