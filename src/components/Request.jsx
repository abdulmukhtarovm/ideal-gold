import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { getText } from '../locales'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Request = () => {
    const [modal, setModal] = useState(false)
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
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
    return (
        <div className='Request'>
            <div className="container">
                <div data-aos="zoom-in-up" className="row all">
                    <div className="info col-md-9">
                        <h2>{getText("requestT")}</h2>
                        <p>{getText("requestP")}</p>
                    </div>
                    <div className="col-md-3">
                        <button onClick={() => { setModal(!modal) }} className="btn">{getText("question")}</button>
                    </div>
                </div>
            </div>
            <form onSubmit={sendMessage}>

                <div className={`application-modal ${modal ? 'active' : ''}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>{getText("applT")}</h3>
                                <FontAwesomeIcon onClick={() => { setModal(!modal) }} icon={faClose} />
                            </div>
                            <div className="modal-body">
                                <div className="position-relative">
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder=" "
                                        id="name"
                                        className="name form-control"
                                        type="text"
                                        name="name" />
                                    <label className="contact-label" for="name">{getText("inputName")}</label>
                                </div>
                                <div className="position-relative">
                                    <input
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder=" "
                                        id="city"
                                        className="city form-control"
                                        type="text"
                                        name="city"/>
                                    <label className="contact-label" for="city">{getText("inputCity")}</label>
                                </div>

                                <div className="position-relative">
                                    <input
                                        required
                                        name="phone_number"
                                        id="phone"
                                        placeholder=" " className="phone form-control" type="number"
                                        value={phone_number}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                    <label className="contact-label" for="phone">{getText("inputTel")}</label>
                                </div>
                                <div className="position-relative">
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder=" " id="message" className="message textarea" type="text" name="message"></textarea>
                                    <label className="contact-label" for="message">{getText("inputMsg")}</label>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button onClick={() => { setModal(!modal) }} type="button" className="close">{getText("cancel")}</button>

                                <button disabled={load} type='submit' className="btn send d-flex align-items-center">
                                    {getText("send")}
                                    {load ? <span style={{ color: '#fff' }} className='spinner-border-sm spinner-border ms-2'></span> : ''}
                                </button>
                            </div>
                            <ToastContainer />

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Request