import React, { useState, useEffect } from 'react'
import { useRouter as UseRouter } from "next/router";
import { Paper, Stack, Typography } from '@mui/material';
import Input from '../../components/controls/input';
import Textarea from '../../components/controls/textarea';
import Button from '../../components/controls/button';
import Phone from '../../components/controls/phone';
import ReCAPTCHA from 'react-google-recaptcha'
import { Form, UseForm } from '../../components/useForm';

const initialFormValues = {

  fullName: '',
  email: '',
  phoneNumber: '',
  subject: '',
  message: ''
}

export default function Contactform() {

  const router = UseRouter();
  const [submitting, setSubmitting] = useState("");
  const recaptchaRef = React.useRef(null);

  const validate = (fieldValues = formValues) => {
    let temp = { ...errors }

    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName && fieldValues.fullName !== null ? "" : "Required";
    if ('email' in fieldValues) {
      temp.email = fieldValues.email ? "" : "Required";
      if (fieldValues.email != '' && fieldValues.email !== null)
        temp.email = (/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(fieldValues.email)) ? "" : "Email is not valid";
    }
    if ('phoneNumber' in fieldValues) {
      temp.phoneNumber = fieldValues.phoneNumber ? "" : "Required";
      if (fieldValues.phoneNumber != '' && fieldValues.phoneNumber !== null && fieldValues.phoneNumber.length !== 0)
        temp.phoneNumber = fieldValues.phoneNumber.length < 14 ? "" : "Required";
    }
    if ('subject' in fieldValues)
      temp.subject = fieldValues.subject && fieldValues.subject !== null ? "" : "Required";
    if ('message' in fieldValues)
      temp.message = fieldValues.message && fieldValues.message !== null ? "" : "Required";

    setErrors({
      ...temp
    })

    if (fieldValues == formValues)
      return Object.values(temp).every(x => x == "");
  }

  const {
    formValues,
    setFormValues,
    errors,
    setErrors,
    handleInputChange
  } = UseForm(initialFormValues, true, validate);


  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      recaptchaRef.current.execute();
      setSubmitting(true)
      // window.alert(JSON.stringify(formValues));
    }
  }
  const email = formValues.email;
  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email , captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Message Sent");
        setFormValues(initialFormValues);
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      recaptchaRef.current.reset();
      setSubmitting("")
    }
  };
  return (
    <div>
      <Paper>
        <Typography gutterBottom variant="h5" className='formTitle'>Get in Touch</Typography>
        <Typography variant="body2" className='formSubtitle'>Please fill out the form below to send us an email and we will
          get back to you as soon as possible</Typography>
        <Form onSubmit={handleSubmit}>
          <Input
            name='fullName'
            label='Name'
            required={true}
            value={formValues.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Input
            name='email'
            label='Email'
            required={true}
            value={formValues.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Phone
            name='phoneNumber'
            label='Phone Number'
            required={false}
            value={formValues.phoneNumber}
            onChange={handleInputChange}
            error={errors.phoneNumber}
          />
          <Input
            name='subject'
            label='Subject'
            required={true}
            value={formValues.subject}
            onChange={handleInputChange}
            error={errors.subject}
          />
          <Textarea
            name='message'
            label='Message'
            required={true}
            value={formValues.message}
            onChange={handleInputChange}
            error={errors.message}
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
          />
          <Stack>
            <Button
              type="submit"
              text="Send"
            />
          </Stack>
        </Form>
        <br />
      </Paper>
    </div>
  )
}
