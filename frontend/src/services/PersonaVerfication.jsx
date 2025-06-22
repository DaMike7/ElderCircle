import { useEffect, useRef } from "react";

const PersonaVerification = ({ onComplete }) => {
  const personaClientRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.withpersona.com/dist/persona-v5.1.2.js";
    script.integrity = "sha384-nuMfOsYXMwp5L13VJicJkSs8tObai/UtHEOg3f7tQuFWU5j6LAewJbjbF5ZkfoDo";
    script.crossOrigin = "anonymous";
    script.async = true;

    script.onload = () => {
      personaClientRef.current = new window.Persona.Client({
        templateId: "itmpl_cG1BCFa2kpP7QN6WDuDfN1coRaW1",
        environmentId: "env_YxZnGVigYUNZZK5ujB9Yf5kxL4fa",
        onComplete: ({ inquiryId, status, fields }) => {
          const dob = fields?.birthdate?.value || null;
          if (onComplete) onComplete({ inquiryId, status, dob });
        },
        onError: (err) => {
          console.error("Persona error:", err);
        },
      });
    };

    document.body.appendChild(script);
  }, [onComplete]);

  const handleStart = () => {
    if (personaClientRef.current) {
      personaClientRef.current.open();
    }
  }

  return (
    <>
        <div>
        <button onClick={handleStart} className="persona-btn">
            Verify Identity
        </button>
        </div>
    </>
  );
};

export default PersonaVerification;