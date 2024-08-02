import './contactSection.css';
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants ={
    initial: {
        y: 100,
        opacity: 0
    },
    animate:{
        y:0,
        opacity: 1, 
        transition: {
            duration: 1.2,
            staggerChildren: 0.1,
        },
    },
};

const ContactSection = () => {

    const ref = useRef();
    const formRef = useRef();
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);

    
    const isInView = useInView (ref, {margin: "-50px" });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xb3uvhu', 'template_y85s9j9', formRef.current, 'qyi18CEiqzp7MIZOX')
            .then((result) => {
                setSuccess(true)
            }, (error) => {
                setError(true)
            });
    };

    return (

    <motion.div
    ref={ref}
    className=" container contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h3 variants={variants}>Contact</motion.h3>
            <motion.div className="item" variants={variants}>
                <h4>Mail</h4>
                <span>info@clinicraftstudios.agency</span>
            </motion.div>
            <motion.div className="item">
                <h4>Address</h4>
                <span>Divine Estate, Warri</span>
            </motion.div>
            <motion.div className="item">
                <h4>Phone</h4>
                <span>+234 801 234 5678</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className="phoneSvg"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <svg  width="300px" height="300px" viewBox="0 0 32.523 32.523" >
                     <motion.path 
                        strokeWidth={0.3}
                        fill="none"
                        initial={{ pathLength:0 }}
                        animate={isInView && { pathLength:1 }}
                        transition={{ duration: 1.5 }}
                     d="M30.441,24.227c-0.233,0.55-1.3,2.765-3.721,3.775c-1.89,0.788-4.066,0.65-6.475-0.4c-2.019,1.158-3.565,0.683-3.565,0.683 C10.616,23.893,6.642,13.016,6.642,13.016C5.597,9.461,8.42,7.788,8.42,7.788c3.555-2.091,4.601-1.149,4.601-1.149 c0.836,0.312,1.568,4.287,1.568,4.287c-0.313,1.464-3.032,2.091-3.032,2.091c1.255,3.66,5.856,9.307,5.856,9.307 c0.209-0.729,1.883-1.775,1.883-1.775c1.045-0.627,3.973,3.031,3.973,3.031c0.833,0.605-0.032,1.54-0.574,2.011 c1.129,0.291,2.127,0.26,2.979-0.097c1.612-0.674,2.261-2.316,2.269-2.335l0.038-0.104l0.056-0.097 c1.312-2.298,1.914-4.913,1.743-7.565c-0.23-3.61-1.854-6.914-4.571-9.302c-2.716-2.39-6.199-3.577-9.81-3.346 C11.787,2.976,8.484,4.6,6.095,7.316s-3.577,6.2-3.345,9.812c0.231,3.608,1.854,6.913,4.571,9.302 c2.716,2.389,6.198,3.576,9.811,3.345c0.749-0.052,1.396,0.521,1.442,1.271c0.048,0.75-0.521,1.396-1.271,1.442 c-0.354,0.023-0.709,0.035-1.063,0.035c-3.951,0-7.721-1.418-10.715-4.051c-3.263-2.867-5.213-6.834-5.491-11.168 s1.148-8.52,4.017-11.779c2.868-3.261,6.835-5.21,11.169-5.488c4.333-0.278,8.518,1.148,11.779,4.018 c3.263,2.868,5.211,6.835,5.489,11.169C32.694,18.373,31.985,21.486,30.441,24.227z M24.305,20.834 c0.161,0.062,0.328,0.092,0.491,0.092c0.545,0,1.059-0.33,1.268-0.869c1.015-2.618,0.949-5.475-0.185-8.042 c-1.134-2.568-3.199-4.541-5.817-5.556c-0.699-0.271-1.487,0.076-1.759,0.776c-0.271,0.7,0.076,1.487,0.775,1.758 c4.005,1.554,6.001,6.074,4.449,10.08C23.257,19.775,23.604,20.562,24.305,20.834z M16.923,10.796 c-0.271,0.699,0.076,1.487,0.776,1.759c2.043,0.792,3.062,3.098,2.27,5.141c-0.271,0.7,0.076,1.487,0.775,1.758 c0.162,0.063,0.328,0.095,0.491,0.095c0.545,0,1.061-0.33,1.269-0.869c1.333-3.441-0.382-7.326-3.822-8.659 C17.982,9.748,17.195,10.095,16.923,10.796z"/> 

                </svg>
            </motion.div>
            <motion.form 
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}>
                <input type="text" required placeholder="Name" name="name" />
                <input type="email" required placeholder="Email" name="email"/>
                <textarea rows={8} placeholder="Message" name="message"/>
                <button className=''>Submit</button>
                {error && "There was an error submitting the form. Please try again."}
                {success && "Your message has been sent successfully!"}
            </motion.form>
        </div>
    </motion.div>
  )
}

export default ContactSection