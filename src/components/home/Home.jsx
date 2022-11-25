import { useState } from 'react'
import emailjs from '@emailjs/browser'

import FormInput from '../form-input/form-input.component'

import { Button } from '../button/button.styles'

import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'
import image5 from '../../images/image5.jpg'
import image6 from '../../images/image6.jpg'
import image7 from '../../images/image7.png'

import './home.scss'

const Home = () => {

    const imagesArr = [image3, image4, image5, image6, image7]

    const [data, setData] = useState({
        name: "",
        car: "",
        number: "",
    })

    const [messageSent, setMessageSent] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }

    const phoneNumberHandleChange = (event) => {
        if (event.target.value.length !== 13) {
            setData({ ...data, number: "+7" + event.target.value.replaceAll("+7", "").replace(/[^+\d]/g, '') })
        }
    }

    const dataToSend = {
        name: data.name,
        car: data.car,
        number: data.number,
    }
    //'
    const send = (e) => {
        e.preventDefault()
        emailjs.send("Autokat-Group", "Autokat-Group", dataToSend, "hdgQTzfRxGyHHOMvj")
            .then((response) => {
                console.log('Отправлено!', "Статус: " + response.status, response.text);
            }, (error) => {
                console.log('Не отправлено', error);
            })
        setData({
            name: "",
            number: "",
            car: "Воронеж"
        })
        setMessageSent(true)
    }

    return (
        <div className="home">
            <div className="home-header">
                <h2>ЛЮБОЙ ОБЪЁМ</h2>
                <h2>Принимаем катализаторный лом от любого веса.</h2>
                <h3>Скупаем катализаторы в любых количествах и в любом виде — керамические, металлические, в корпусах, выбитые, крошки, лом.</h3>
                <h2>В ТЕЧЕНИИ 15 МИНУТ</h2>
                <h3>Оценим ваш материал в течении 15 минут.</h3>
                <h2>Все будет происходить на ваших глазах: никакого обмана.</h2>
                <h2>Работаем с транспортными компаниями по всей России.</h2>
            </div>
            <div className="home-raschot">
                <h2>Сделаем расчёт</h2>
                <div>
                    <p>Керамические катализаторы</p>
                    <p>до <strong>200 000</strong> руб. за 1 кг.</p>
                    <p>Металлические катализаторы Российского производства</p>
                    <p>до <strong>3800</strong> руб. за 1 кг.</p>
                    <p>Иномарки до <strong>17 000</strong> руб. за 1 кг.</p>
                    <p>Сажевые фильтры до <strong>17 000</strong> руб. за 1 кг.</p>
                </div>
            </div>
            <div className="home-images">
                {imagesArr.map((el, i) => {
                    return <div key={i}>
                        <img src={el} alt="i" />
                    </div>
                })}
            </div>
            <div className="form">
                <div>
                    <h2>Отправьте заявку</h2>
                </div>
                <div>
                    <form>
                        <FormInput name="name" label="Имя" value={data.name} onChange={handleChange} />
                        <FormInput name="car" label="Марка машины" value={data.car} onChange={handleChange} />
                        <FormInput name="number" label="Телефон" value={data.number !== "+7" ? data.number : ""} onChange={phoneNumberHandleChange} />
                        <Button onClick={send} disabled={data.name === "" || data.car === "" || data.number.length < 12 || messageSent}>{messageSent ? "Отправлено" : "Отправить"}</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home