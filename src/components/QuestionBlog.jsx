import React, { useState } from 'react'
import { getText } from '../locales'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const QuestionBlog = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [load, setLoad] = useState(false)

    let bot = {
        TOKEN: "5471127263:AAEjcNcEurDFNNf25J5LFcZZHX0gVq9mioc",
        chatID: ["-1001597703418"]
    }
    const sendMessage = (e) => {
        for (let index = 0; index < bot.chatID.length; index++) {
            const user = bot.chatID[index];

            e.preventDefault()
            axios.get(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${user}&text=${'Имя: ' + name +  '%0AГород: ' + city + '%0AНомер телефона: %2B' + phone_number + ' %0AСообщение: ' + message}`)
                .then((res) => {
                    setName("")
                    setCity("")
                    setPhoneNumber("")
                    setMessage("")
                    setTimeout(() => {
                        setLoad(false)
                    }, 3000)
                    notify()
                    // Boldi
                })
                .catch((err) => {
                    setLoad(false)
                    // console.log(err);
                })
                .finally(() => {
                    setLoad(false)
                })
        }
    }
    const notify = () => toast.success('Success!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
    return (
        <div className='QuestionBlog'>
            <form onSubmit={sendMessage}>
                <div className="container">
                    <div className="main-title">
                        <h2>{getText("questionT")}</h2>
                        <p>{getText("questionP")}</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <div className="position-relative">
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder=" "
                                    id="name"
                                    className="name form-control"
                                    type="text" name="name" />
                                <label className="contact-label" for="name">{getText("inputName")}</label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="position-relative">
                                <input
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder=" "
                                    id="city"
                                    className="city form-control"
                                    type="text"
                                    name="city" />
                                <label className="contact-label" for="city">{getText("inputCity")}</label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="position-relative">
                                <input type='number'
                                    required
                                    name="phone_number"
                                    id="phone"
                                    placeholder=" "
                                    className="phone form-control"
                                    value={phone_number}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <label className="contact-label" for="phone">{getText("inputTel")}</label>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="position-relative">
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}

                                    placeholder=" " id="message" className="message textarea" type="text" name="message"></textarea><label className="contact-label" for="message">{getText("inputMsg")}</label>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button disabled={load} type='submit' className="btn send-btn d-flex align-items-center">
                                {getText("send")}
                                {load ? <span style={{ color: '#fff' }} className='spinner-border-sm spinner-border ms-2'></span> : ''}
                            </button>
                        </div>
                        <ToastContainer />

                    </div>
                </div>
            </form>
        </div>
    )
}

export default QuestionBlog