import Head from 'next/head'
import Link from 'next/link'
import Menu from '../componentes/menu/menu'
import Title from '../componentes/title/title'
import styles from '../styles/Home.module.css'
import SwiperCore, { Parallax, Navigation, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
SwiperCore.use([Parallax,Pagination,Mousewheel,Navigation])
import { Fragment } from 'react';
import optionsCover from '../lib/optionsCover'
import Footer from '../componentes/footer/footer'

export default function Home({trendingProps,actionProps,comedyProps}) {
  return (
    <Fragment>
    <Head>
      <meta name="theme-color" content="#161616" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#161616" />
      <meta name="msapplication-navbutton-color" content="#161616" />
      <title>Reactflix</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Menu></Menu>
    <Swiper speed={600} parallax={true} pagination={{
      "clickable": true}} navigation={true} className="mySwiper">
      <SwiperSlide>
        <img className={styles.swiper_img} src="https://www.themoviedb.org/t/p/original/6S159wVNvQfwoQh5yBxWKCsI1YL.jpg"/>
        <div className={styles.box_text}>
          <div className={styles.box_row_flex}>
            <h1 data-swiper-parallax="-900">O dilema das redes</h1>
            <p data-swiper-parallax="-700">Especialistas em tecnologia e profissionais da área fazem um alerta: as redes sociais podem ter um impacto devastador sobre a democracia e a humanidade.</p>
            <Link href="#">
              <a className="buttom">info</a>
            </Link>
          </div>
        </div>
        <div className="shadow"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.swiper_img} src="https://www.themoviedb.org/t/p/original/ktZaQ4FEmKpRgetiBooZETYQbmQ.jpg"/>
        <div className={styles.box_text}>
          <div className={styles.box_row_flex}>
            <h1 data-swiper-parallax="-900">O gambito da rainha</h1>
            <p data-swiper-parallax="-700">Durante a Guerra Fria, em um orfanato do Kentucky, uma garota prodígio do xadrez luta contra o vício para se tornar a número um do mundo.</p>
          </div>
        </div>
        <div className="shadow"></div>
      </SwiperSlide>
    </Swiper>
      <div className={styles.container_cards} id="wrapper_cards">
        <Title title="trending"/>
        <Swiper className="mySwiper" {...optionsCover}>
          {trendingProps.map((index,i) => 
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
        <Title title="ação"/>
        <Swiper className="mySwiper" {...optionsCover}>
          {actionProps.map((index,i) => 
            <SwiperSlide key={i}>
              <div className="skeleton">
                <div className="skeleton-absolute">
                  <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/`+index.poster_path} title={index.title || index.name} />
                </div>
              </div>
            </SwiperSlide>)}
        </Swiper>
        <Title title="comédia"/>
        <Swiper className="mySwiper" {...optionsCover}>
          {comedyProps.map((index,i) => 
            <SwiperSlide key={i}>
              <div className="skeleton">
                <div className="skeleton-absolute">
                  <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/`+index.poster_path} title={index.title || index.name} />
                </div>
              </div>
            </SwiperSlide>)}
        </Swiper>
      </div>
      <Footer></Footer>
    </Fragment>
  )
}

export async function getServerSideProps(){
  const [trendingRes, actionRes, comedyRes] = await Promise.all([
    fetch('http://localhost:3000/api/trending'),
    fetch('http://localhost:3000/api/action'),
    fetch('http://localhost:3000/api/comedy')
  ]);

  const [trending,action,comedy] = await Promise.all([
    trendingRes.json(),
    actionRes.json(),
    comedyRes.json()
  ]);

  return{
    props: {
      trendingProps: trending.list,
      actionProps: action.list,
      comedyProps: comedy.list
    }
  };
}
