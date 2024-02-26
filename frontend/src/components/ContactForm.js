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
        <form className='container' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
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
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ContactForm;
