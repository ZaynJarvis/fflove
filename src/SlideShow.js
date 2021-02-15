import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper';
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as FF } from "./assets/ff.svg";

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

function SwiperComponent() {
    const links = [
        'url(https://genesis-cdn.ff.com/Investors/19010GAMA_Y101_0001_Frame.0017-Edit_.jpg)',
        'url(https://genesis-cdn.ff.com/homepage/ff-91-interior/INTERIOR_cutdown_forFFCOM_02A.00_00_00_00.Still001.jpg)',
        'url(https://genesis-cdn.ff.com/futuresight/Carousel-homepage/18006COLD_FFWEB.mov.00_01_00_00.Still001.jpg)',
    ]
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className='swiper'
        >
            <div className='overlay'>
                <h5>Faraday Future</h5>
                {/* <p>Coming Soon</p> */}
                <div className='logos'>
                    <a href='https://www.ff.com/'><FF className='ff' /></a>
                    <a href='https://twitter.com/FaradayFuture'><Twitter className='twitter' /></a>
                </div>
            </div>
            {
                links.map(l => (<SwiperSlide key={l}>
                    <div className='slide' style={{ backgroundImage: l }}>
                    </div>
                </SwiperSlide>))
            }
        </Swiper >
    );
};

export default SwiperComponent;