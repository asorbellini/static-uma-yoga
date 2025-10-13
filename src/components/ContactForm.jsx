
import { useRef, useState, useCallback, useMemo } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {ComponentLoading} from "./LoadingFootPrints.jsx";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [submited, setSubmited] = useState(false);
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [hcaptchaToken, setHcaptchaToken] = useState(null);
  const HpublicKey = "249e79ec-f492-4438-9848-e93a7e023e60";
  const [formDataState, setFormDataState] = useState({
        name: '',
        surname: '',
        subject: '',
        email: '',
        message: '',
    });
  const isFormValid = useMemo(() => {
        return Object.values(formDataState).every(value => value.trim() !== '');
    }, [formDataState]);

  const onVerify = useCallback((token) => {
      setHcaptchaToken(token);
  }, []);

  const onExpire = useCallback(() => {
    console.log("Captcha token scaduto. Riprovare.");
    setHcaptchaToken(null);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null)
    if (!isFormValid) {
      setStatus({ ok: false, message: "Si prega di compilare tutti i campi richiesti." });
      setLoading(false);
      return;
    }

    if (!hcaptchaToken) {
      setStatus({ ok: false, message: "Si prega di completare il controllo di sicurezza (hCaptcha)." });
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData(formRef.current);
      formData.append('access_key', "75601b01-e3e6-43db-b0fb-0f0f96088fd4");
      Object.keys(formDataState).forEach(key => {
          formData.append(key, formDataState[key]);
      });
      formData.append('h-captcha-response', hcaptchaToken)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result)
    if (result.success) {
      setStatus({ ok: true, message: "Messaggio inviato con successo!" });
      setSubmited(true)
      formRef.current.reset();
    } else {
      setStatus({ ok: false, message: result.message || "Errore durante l'invio." });
    }
    } catch (error) {
        alert("Si è verificato un problema durante l'invio del modulo.");
    } finally {
        setLoading(false);
        setHcaptchaToken(null);
    }
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: !value.trim() }))
  }
  const inputClass = (name) => `bg-white/30 w-full border-b-2 p-2 rounded-lg transition-all duration-200 text-oscuro ${
      touched[name] && formDataState[name].trim() === '' ? "border-red-500 bg-red-200/30" : "border-transparent"
    }`

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full md:w-[80vw] max-w-3xl px-6 md:px-0">
        {status && (
          <p className={`bg-white text-sm mt-2 ${status.ok ? "text-green-600" : "text-red-600"}`} role="alert" aria-live="polite">
            {status.message}
          </p>
        )}
        <div className="flex flex-col md:flex-row py-0 md:py-4">
            <div className="flex-1">
                <label>Nome</label>
                <input type="text" name="name" required onBlur={handleBlur} className={inputClass("name")} value={formDataState.name} onChange={handleChange} />
            </div>
            <div className="flex-1 md:pl-4 py-4 md:py-0">
                <label>Cognome</label>
                <input type="text" name="surname" required onBlur={handleBlur} className={inputClass("surname")} value={formDataState.surname} onChange={handleChange}/>
            </div>
        </div>
        <div className="py-4">
          <label>Questione</label>
          <input type="text" name="subject" required onBlur={handleBlur} className={inputClass("subject")} value={formDataState.subject} onChange={handleChange}/>
        </div>
        <div className="py-4">
          <label>E-Mail</label>
          <input type="email" name="email" required onBlur={handleBlur} className={inputClass("email")} value={formDataState.email} onChange={handleChange}/>
        </div>
        <div className="py-4">
          <label>Messaggio</label>
          <textarea name="message" required 
              value={formDataState.message} onChange={handleChange} 
              onBlur={handleBlur} className={inputClass("message")} />
        </div>
        <HCaptcha
         sitekey={HpublicKey}
         reCaptchaCompat={false}
         onVerify={onVerify} 
         onExpire={onExpire}
      /> 
      {!hcaptchaToken && isFormValid && !loading && (
            <p className="text-sm mt-2 text-red-500" aria-live="polite">
                Per favore, completa il CAPTCHA di sicurezza.
            </p>
      )}
      <button type="submit" className="btn-primary bg-terracota border-2 border-terracota hover:opacity-80 hover:border-terracota text-black transition-all duration-500 uppercase my-4" 
      disabled={submited || !hcaptchaToken || !isFormValid}>
        {loading ? "Invio in corso ..." : "Invia"}
      </button>
    </form>
  );
}
