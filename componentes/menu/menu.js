import Link from 'next/link'
import { useState } from 'react'
import {useEffect} from 'react';
import Search from '../search/search';
import styles from './Menu.module.css'

export default function Menu(){

    const [menuColor, setMenuColor] = useState(false)

    const changeMenuColor = () => {
        if(window.scrollY > 120){
            setMenuColor(true)
        }else{
            setMenuColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeMenuColor)
        return () => window.removeEventListener('scroll', changeMenuColor)
    })

    return (
        <menu className={menuColor ? "menuColor":"menuOpacityColor"}>
            <div className={styles.logo}>
                    <Link href="/">
                        <a className={styles.link}>
                        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="250" height="97" viewBox="0 0 250 97">
                            <text id="reactflix" fill="red" fontSize="90" fontFamily="QueenofClubs, Queen of Clubs"><tspan x="0" y="79">reactflix</tspan></text>
                        </svg>
                        </a>
                    </Link>
            </div>
            <div className={styles.box_right}>
                <Search/>
                <img className={styles.icon} src="https://64.media.tumblr.com/ebaf34fe31ba5feaf8316df5a65aa07b/72000c6030712841-e7/s400x600/4403d5bf9f67399659bf990b255703d85a96f5cb.jpg"/>
            </div>
        </menu>
    )
}