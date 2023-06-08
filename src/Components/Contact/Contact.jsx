import s from './Contact.module.css'
import User from './User/User'
import { useEffect, useRef  } from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Contact = (props) => {
    let UsersCollection = props.users.map((user) => (
        <User key = {user.id} name = {user.name} order = {user.order}/>
    ))

    const form = {
        name: useRef(null),
        phone: useRef(null),
        order: useRef(null),
        btn: useRef(null)
    }

    let success = () => {Notify.success('Your order has been send successfully')}

    useEffect (() => {
        form.name.current.addEventListener("input" , () => {
            props.updateNewUser("name", form.name.current.value)
        })
        form.order.current.addEventListener("input" , () => {
            props.updateNewUser("order", form.phone.current.value)
        })
        form.btn.current.addEventListener("click", () => {
            props.createUser()
            success()
        })
    }, [])



    return (
        <section className={s.contacts}>
                <div className={s.box}>
                    <h2 class="title">Lorem ipsum dolor sit amet.</h2>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestias!</p>
                    <form action="" className={s.order}>
                        <input type="text" ref={form.name} className={s.name} placeholder="Your name..."/>
                        <input type="text" ref={form.phone} className={s.phone} placeholder="Yout phone number..."/>
                        <input type="text" ref={form.order} className={s.orderN} placeholder='Your order number...'/>
                        <button className={s.btn} ref={form.btn} onClick={(e) => {e.preventDefault()}}>Send</button>
                    </form>

                    <h3>Amount of people that already have found their friends with our help: {props.countUsers}</h3>
                </div>
                <h3 style={{textAlign: 'center', margin: '10px'}}>Our Happy Customers!</h3>
                    {UsersCollection}
        </section>
    )
}

export default Contact