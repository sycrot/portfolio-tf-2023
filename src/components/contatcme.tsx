'use client'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import { Toast } from 'react-bootstrap'

const schema = yup.object({
  name: yup.string().required(`This field is required`),
  email: yup.string().required(`This field is required`),
  message: yup.string().required(`This field is required`),
})

export default function Contactme() {
  const [showMessageSuccess, setShowMessageSuccess] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      setShowMessageSuccess(true)
      const templateParams = {
        from_name: values.name,
        message: values.message,
        email: values.email
      }

      emailjs.send('service_7p05vni', 'template_0bf4cp4', templateParams, 'KzoZJ-4KiS7MkTsr7').then(() => {
        setShowMessageSuccess(false)
        resetForm()
      })
    }
  })

  return (
    <>
      <Toast show={showMessageSuccess} onClose={() => setShowMessageSuccess(false)} autohide delay={3000} className='position-fixed' style={{
        bottom: '20%',
        left: '50%',
        right: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '10',
        border: 'none'
      }}>
        <Toast.Header>
          <strong className="me-auto">Mensagem enviada</strong>
        </Toast.Header>
        <Toast.Body>
          <div className='w-100 d-flex justify-content-center'>
            <iframe src="https://lottie.host/?file=e922584d-805f-451c-9286-b7ad3c612eae/AKE2qGQv6O.json"></iframe>
          </div>
          <p className='text-center'>
            Sua mensagem foi enviada e logo será respondida.
          </p>
        </Toast.Body>
      </Toast>
      <div id="contactMe">
        <div className="container">
          <div className="title-section">
            <h2 className="mb-0">Contate-me</h2>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-6 boxtexts">
              <h2>Vamos trabalhar juntos?</h2>
              <h5>Envie sua mensagem, ou entre em contato por:</h5>

              <div className="content mt-4">
                <p className="d-flex align-items-center mb-0">
                  <strong>E-mail:</strong>
                  <a href="mailto:thiagojosef99@gmail.com?subject=Olá%20, Thiago J Farias" className='ms-2'>thiagojosef99@gmail.com</a>
                </p>

                <p className="d-flex align-items-center mb-0 mt-2">
                  <strong>Telefone:</strong>
                  <a href="https://api.whatsapp.com/send?phone=5599981320253" target="_blank" className='ms-2'>+55 99 98132-0253</a>
                </p>

              </div>
            </div>
            <div className="col-12 col-md-6 mt-5 mt-md-0">
              <form onSubmit={formik.handleSubmit} className='needs-validation' noValidate>
                <div className="row">
                  <div className="col-12 col-md-6 px-1">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${(formik.touched.name && formik.errors.name) !== undefined && 'input-error'}`}
                        id="floatingName"
                        name="name"
                        placeholder="Thiago Farias"
                        value={formik.values.name}
                        onChange={formik.handleChange} />
                      <label htmlFor="floatingName">Nome</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-1 mt-2 mt-md-0">
                    <div className="form-floating">
                      <input
                        type="email"
                        className={`form-control ${(formik.touched.email && formik.errors.email) !== undefined && 'input-error'}`}
                        id="floatingEmail"
                        name="email"
                        placeholder="example@ex.com"
                        value={formik.values.email}
                        onChange={formik.handleChange} />
                      <label htmlFor="floatingEmail">E-mail</label>
                    </div>
                  </div>
                  <div className="col-12 py-2 px-1">
                    <div className="form-floating">
                      <textarea
                        className={`form-control ${(formik.touched.message && formik.errors.message) !== undefined && 'input-error'}`}
                        placeholder="Leave a comment here" id="floatingTextarea2"
                        name="message"
                        rows={5}
                        style={{ resize: 'none', height: '140px' }}
                        value={formik.values.message}
                        onChange={formik.handleChange}></textarea>
                      <label htmlFor="floatingTextarea2">Mensagem</label>
                    </div>
                  </div>
                </div>
                <button type='submit' className='button-submit mt-4'>Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}