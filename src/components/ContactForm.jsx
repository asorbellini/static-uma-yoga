
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef(null);
/*   const captchaRef = useRef(null); */
  const [status, setStatus] = useState(null);
  const [submited, setSubmited] = useState(false);
  const [touched, setTouched] = useState({});
  /* const [captchaCompleted, setCaptchaCompleted] = useState(false);
  const siteKey = "6Ld23IwrAAAAAP_5ayS0j8PyB87UQb-tihJx5RAV";
 
  useEffect(() => {
    const renderCaptcha = () => {
      if (window.grecaptcha && captchaRef.current) {
        window.grecaptcha.render(captchaRef.current, {
          sitekey: siteKey,
          callback: () => setCaptchaCompleted(true),
          "expired-callback": () => setCaptchaCompleted(false),
        });
      }
    };

    if (window.grecaptcha) {
      renderCaptcha();
    } else {
      window.onloadCallback = renderCaptcha;
    }
  }, []);*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert('Porfavor completa el reCAPTCHA');
      return;
    } */

    const formData = new FormData(formRef.current);
    formData.append("access_key", "c3a2a264-bd1b-4420-89d9-e0e4101a4eb8");
   /*  formData.append("g-recaptcha-response", recaptchaResponse); */

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log(result)
    if (result.success) {
      setStatus({ ok: true, message: "Mensaje enviado correctamente!" });
      setSubmited(true)
      formRef.current.reset();
      /* window.grecaptcha.reset();
      setCaptchaCompleted(false); */
    } else {
      setStatus({ ok: false, message: result.message || "Error al enviar." });
    }
  };
  
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev)=>({...prev, [name]:!value.trim()}))
  }

  const inputClass = (name) => `bg-transparent w-full border-b-2 p-2 transition-all duration-200 ${
      touched[name] ? "border-red-500 bg-red-100/30" : "border-claro"
    }`

    if (submited) return (
      <div className="bg-verdeOliva">
          Su formulario ha sido enviado exitosamente. Muchas gracias! 
      </div>
    )
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-[80vw] max-w-3xl">
        <div className="flex flex-row space-x-4 py-4">
            <div className="flex-1">
                <label>Nome</label>
                <input type="text" name="name" required onBlur={handleBlur} className={inputClass("name")} />
            </div>
            <div className="flex-1">
                <label>Cognome</label>
                <input type="text" name="surname" required onBlur={handleBlur} className={inputClass("surname")} />
            </div>
        </div>
        <div className="py-4">
          <label>Questione</label>
          <input type="text" name="subject" required onBlur={handleBlur} className={inputClass("subject")} />
        </div>
        <div className="py-4">
          <label>E-Mail</label>
          <input type="email" name="email" required onBlur={handleBlur} className={inputClass("email")} />
        </div>
        <div className="py-4">
          <label>Messaggio</label>
          <textarea name="message" required onBlur={handleBlur} className={inputClass("message")} />
        </div>
      {/*
      <div className="flex justify-center py-4">
        <div ref={captchaRef} class="g-recaptcha"></div>
      </div> */}

      <button type="submit" className="btn-primary uppercase">
        Invia
      </button>

      {status && (
        <p className={`text-sm mt-2 ${status.ok ? "text-green-600" : "text-red-600"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
