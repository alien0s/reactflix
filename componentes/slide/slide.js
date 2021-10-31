import SwiperCore, { Parallax, Navigation, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
SwiperCore.use([Parallax,Pagination,Mousewheel,Navigation])
import Link from 'next/link'
import optionsCover from '../../lib/optionsCover';

export default function Slide(props){
    return(
        <Swiper {...optionsCover}>
            {props.array.map((index,i) => 
            <SwiperSlide key={i}>
              <Link href={`/filme/${index.id}`}>
                <a>
                  <div className="skeleton">
                    <div className="skeleton-absolute">
                      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/`+index.poster_path} title={index.title || index.name} />
                    </div>
                  </div>
                </a>
              </Link>
            </SwiperSlide>)}
        </Swiper>
    )
}