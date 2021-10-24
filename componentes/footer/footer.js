export default function Footer(){
    return(
        <footer>
            <div className="box_logo_footer">
                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="97" viewBox="0 0 250 97">
                    <text id="reactflix" fill="red" fontSize="90" fontFamily="QueenofClubs, Queen of Clubs"><tspan x="0" y="79">reactflix</tspan></text>
                </svg>
            </div>
            <div className="description">
                Powered with (<a target="_blank" href="https://nextjs.org/">Nextjs,</a><a target="_blank" href="https://pt-br.reactjs.org/">React,</a><a target="_blank" href="https://swiperjs.com/"> Swiper</a>) by <a target="_blank" href="">@alien0s</a>
            </div>
        </footer>
    )
}