import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper';
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as FF } from "./assets/ff.svg";
import Prismic from '@prismicio/client'
import Client from './prismic/client'

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

function SwiperComponent() {
    const [links, setPosterData] = React.useState(null)

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at('document.type', 'poster')
            )
            if (response) {
                setPosterData(response.results)
            }
        }
        fetchData()
    }, [])

    return links ? <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='swiper'
    >
        <div className='overlay'>
            <h5>Faraday Future</h5>
            <div className='logos'>
                <a href='https://www.ff.com/'><FF className='ff' /></a>
                <a href='https://twitter.com/FaradayFuture'><Twitter className='twitter' /></a>
            </div>
        </div>
        {
            links.sort((a, b) => a.uid - b.uid).map(l => (<SwiperSlide key={l.uid}>
                <div className='slide' style={{ backgroundImage: 'url("' + l.data.image.url + '")' }}>
                </div>
            </SwiperSlide>))
        }
    </Swiper>
        :
        <div className='swiper'>
            <div className='overlay'>
                <h5>Faraday Future</h5>
                <div className='logos'>
                    <a href='https://www.ff.com/'><FF className='ff' /></a>
                    <a href='https://twitter.com/FaradayFuture'><Twitter className='twitter' /></a>
                </div>
            </div>
        </div>;
};

export default SwiperComponent;