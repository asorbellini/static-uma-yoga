
import { useRef, useState, useCallback, useMemo } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { ComponentLoading } from "./LoadingFootPrints";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [submited, setSubmited] = useState(false);
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [hcaptchaToken, setHcaptchaToken] = useState(null);
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
    if (!isFormValid || !hcaptchaToken) {
        setLoading(false);
        const message = !isFormValid 
            ? "Si prega di compilare tutti i campi richiesti." 
            : "Si prega di completare il controllo di sicurezza (hCaptcha).";
        setStatus({ ok: false, message: message });
        return;
      }

    try {
      const formData = new FormData(formRef.current);
      formData.append('access_key', "75601b01-e3e6-43db-b0fb-0f0f96088fd4");
      console.log("FormData", ...formData)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result)
    if (result.success) {
      setStatus({ ok: true, message: "Messaggio inviato con successo!" });
      setSubmited(true)
      setFormDataState({ name: '', surname: '', subject: '', email: '', message: '' });
      setTouched({});
    } else {
      setStatus({ ok: false, message: result.message || "Errore durante l'invio." });
    }
    } catch (error) {
        setStatus({ ok: false, message: "Si è verificato un problema di rete durante l'invio." });
    } finally {
        setLoading(false);
        setHcaptchaToken(null);
    }
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  const inputClass = (name) => `bg-white/30 w-full border-b-2 p-2 rounded-lg transition-all duration-200 text-oscuro ${
      touched[name] && formDataState[name].trim() === '' ? "border-red-500 bg-red-200/30" : "border-transparent"
    }`

  return (
    <div className="w-full md:w-[80vw] max-w-3xl px-6 md:px-0">
        {status && (
          <p className={`bg-white text-sm mt-2 text-center ${status.ok ? "hidden" : "text-red-600"}`} role="alert" aria-live="polite">
            {status.message}
          </p>
        )}
        {submited && status?.ok 
        ? (
          <div className="bg-verdeBosque/80 backdrop-blur-xl text-center rounded-3xl py-10">
            <h2 className="text-2xl font-bold text-white">Messaggio Ricevuto!</h2>
            <p className="text-white mt-2">Ti risponderemo al più presto. Grazie.</p>
          </div>
          ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="w-full md:w-[80vw] max-w-3xl px-6 md:px-0">
                  <div className="flex flex-col md:flex-row py-0 md:py-2">
                      <div className="flex-1">
                          <label className="text-base md:text-lg">Nome</label>
                          <input type="text" name="name" required 
                            value={formDataState.name} onChange={handleChange} 
                            className={inputClass("name")}/>
                      </div>
                      <div className="flex-1 md:pl-4 py-4 md:py-0">
                          <label className="text-base md:text-lg">Cognome</label>
                          <input type="text" name="surname" required 
                            value={formDataState.surname} onChange={handleChange}
                            className={inputClass("surname")} />
                      </div>
                  </div>
                  <div className="py-2">
                    <label className="text-base md:text-lg">Questione</label>
                    <input type="text" name="subject" required 
                      value={formDataState.subject} onChange={handleChange}
                      className={inputClass("subject")}/>
                  </div>
                  <div className="py-2">
                    <label className="text-base md:text-lg">E-Mail</label>
                    <input type="email" name="email" required 
                      value={formDataState.email} onChange={handleChange}
                      className={inputClass("email")}/>
                  </div>
                  <div className="py-2">
                    <label className="text-base md:text-lg">Messaggio</label>
                    <textarea name="message" required 
                        value={formDataState.message} onChange={handleChange} 
                        className={inputClass("message")} />
                  </div>
                  <HCaptcha
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  reCaptchaCompat={false}
                  onVerify={onVerify} 
                  onExpire={onExpire}
                  /> 
                  <button type="submit" className="btn-scopri border-2 border-claro text-white transition-all duration-500 uppercase my-4 disabled:cursor-not-allowed disabled:hover:none-effect" 
                  disabled={submited || !hcaptchaToken || !isFormValid}>
                    {loading ? "Inviando..." : "Invia"}
                  </button>
                </form>)
      }
    </div>
  );
}
