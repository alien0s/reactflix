import Menu from "../../componentes/menu/menu"
import Title from "../../componentes/title/title"
import Head from "next/head"
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Footer from "../../componentes/footer/footer"
import Slide from "../../componentes/slide/slide";

export default function Filme ({info,similarProps}) {

    return(
        <div>
            <Head>
                <meta name="theme-color" content="#161616" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#161616" />
                <meta name="msapplication-navbutton-color" content="#161616" />
                <title>Filme {info.title}</title>
            </Head>
            <Menu/>
            <div className={styles.box_backdrop}>
                <div className={styles.backdrop_skeleton}>
                    <div className={styles.backdrop_skeleton_absolute}>
                        <img className={styles.img} src={`https://image.tmdb.org/t/p/original/${info.backdrop_path}`}/>
                        <div className={styles.box_text}>
                        <div className={styles.box_row_flex}>
                            <h1>{info.title || info.name}</h1>
                            <p>{info.overview}</p>
                            <Link href="#">
                                <a className="buttom">info</a>
                            </Link>
                        </div>
                        </div>
                        <div className="shadow"></div>
                    </div>
                </div>
            </div>
            <div className={styles.container_cards} id="wrapper_cards">
                <Title title="trending"/>
                <Slide array={similarProps}/>
            </div>
            <Footer></Footer>
        </div>
    )
}

export async function getServerSideProps(context){
    const [filmeRes, similarRes] = await Promise.all([
        fetch(`https://reactflix-alien0s.vercel.app/api/movie/${context.params.id}`),
        fetch(`https://reactflix-alien0s.vercel.app/api/similar/${context.params.id}`)
    ]);
    
    const [filme,similar] = await Promise.all([
        filmeRes.json(),
        similarRes.json()
    ])

    return{
        props: {
            info: filme.info,
            similarProps: similar.list
        }
    }
}