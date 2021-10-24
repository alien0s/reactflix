import { useState } from 'react'
import Link from 'next/link'
import search from '../../pages/api/search'
import optionsCover from '../../lib/optionsCover'
import SwiperCore, { Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
SwiperCore.use([Mousewheel,Navigation])
import styles from './Search.module.css'

export default function Search(){
    const [text,setText] = useState("")
    const [list,setList] = useState([])
    const [visible,setVisible] = useState(false)

    const searchBox = () => {
        setVisible(!visible)
    }
    const handleSearch = async () => {
        if(text !== ""){
            const results = await fetch(`http://localhost:3000/api/search?query=${text}`)
            const json = await results.json()
            setList(json.list)
        }
    }
    return(
        <div>
            <button className={styles.button_box} onClick={searchBox}>
                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
            </button>
            <div id={styles.list_search} className={visible ? "list_search_open" : "list_search_close"}>
                <button className={styles.button_box} onClick={searchBox}>
                    <svg class={styles.icon_close} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg>
                </button>
                <div className={styles.box_wrapper}>
                    <div className={styles.box_input}>
                        <input className={styles.input} placeholder="Pesquisar" type="text" value={text} onChange={e=>setText(e.target.value)}/>
                        <span className={styles.span_icon}><button onClick={handleSearch} id={styles.icon_search} className={styles.button_box}><svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></button>
                        </span>
                    </div>
                    <div className={styles.container_swiper}>
                        <Swiper className="mySwiper" {...optionsCover}>
                        {list.map((index,i) => 
                            <SwiperSlide key={i}>
                                <Link href={`/filme/${index.id}`}>
                                    <a>
                                        <div className="skeleton">
                                            <div className="skeleton-absolute">
                                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/`+index.poster_path} title={index.title || index.name} />
                                            </div>
                                        </div>
                                        <div className={styles.box_info_movie}>
                                            <h5 className={styles.title_h5}>{index.title || index.name}</h5>
                                        </div>
                                    </a>
                                </Link>
                            </SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}