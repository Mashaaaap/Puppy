import puppy from '../Img/puppy.png'
import s from './Hero.module.css'

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.post}>
                <h1 className={s.post_title}>Fluffy Puppy is fluffy and is a puppy</h1>
                <p className={s.post_text}>A puppy is a juvenile dog. Some puppies can weigh 1–1.5 kg (2.2–3.3 lb), while larger ones can weigh up to 7–11 kg (15–24 lb). All healthy puppies grow quickly after birth.</p>
                <hr className={s.line}/>
            </div>
            <div className={s.img}>
                <img src={puppy} alt="" />
            </div>
        </section>
    )
}

export default Hero