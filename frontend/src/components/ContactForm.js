import React from 'react'
import { useForm } from 'react-hook-form';

const ContactForm = () => {

    const { register, handleSubmit, formState: { errors}, reset } = useForm();

    const msgErrors = {
        email : {
            requis: "Vous devez saisir un email",
            format: "Le email est invalide"
        },
        message : {
            requis: "Vous devez saisir un message"
        }

    }

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return (
            <div className="card text-center w " id="container-contact">
                <div className="card-header h3 text-white" style={{ backgroundColor: "#D4015F" }}>Contactez-nous! </div>
                <div className="card-body px-5">
                    <p className="card-text py-2">
                        Questions?  Commentaires?  Quelque chose cloche sur le site?  Une blague à partager qui sauvera
                        notre journée d'une morosité absolue?  Vous ne savez pas à qui envoyer ce petit mot doux un petit
                        peu fleur bleue que vous avez écrit sur une serviette de table?  On est là pour vous!
                    </p>
        <form className='container text-start' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Votre courriel</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" { ...register("email",
                    {required: msgErrors.email.requis, pattern: {value: /^\S+@\S+$/i, message: msgErrors.email.format}})}/>
                {errors.email && errors.email.message}
                {errors.email && errors.email.type === "pattern"}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    { ...register("message", {required : msgErrors.message.requis})}></textarea>
                {errors.message && errors.message.message}
            </div>
            <div>
                <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="File"/>
            </div>
            <br/>
            <div className="text-center mb-3">
            <button type="submit" className="btn btn-info">Envoyer <i className="bi bi-envelope-paper-heart"></i>
            </button>
            </div>
        </form>
                </div>

        </div>

    )
}

export default ContactForm;
