import { useState, useRef } from "react";
import { apiFetch,isTokenExpired,refreshAccessToken } from "../utils/auth";

const DEPARTMENTS = [
  "Aerospace Engineering","Chemical Engineering","Civil Engineering",
  "Computer Science & Engineering","Electrical Engineering","Engineering Physics",
  "Mechanical Engineering","Metallurgical Engg & Materials Science",
  "Mathematics","Physics","Chemistry","Biosciences & Bioengineering",
  "Interdisciplinary / Other",
];

const YEARS = ["1st Year (Freshie)","2nd Year","3rd Year","4th Year","5th Year"];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-2 mt-7 mb-4 pb-1.5 border-b border-[#1e1e1e] text-[11px] text-[#4a90d9] uppercase tracking-[0.1em] font-medium">
      {children}
    </div>
  );
}

function Field({ label, required, children, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-[12px] text-[#7ca8d8] font-medium tracking-wide">
        {label}{required && <span className="text-[#e24b4a] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-[#111111] border border-[#1e1e1e] rounded-md text-[#d0e4f7] text-sm px-3.5 py-2.5 outline-none placeholder-[#2a2a2a] focus:border-[#2563ab] focus:ring-2 focus:ring-[#2563ab]/20 transition-all";

const selectClass =
  "w-full bg-[#111111] border border-[#1e1e1e] rounded-md text-[#d0e4f7] text-sm px-3.5 py-2.5 outline-none focus:border-[#2563ab] focus:ring-2 focus:ring-[#2563ab]/20 transition-all appearance-none cursor-pointer";

export default function SARCShadowForm() {
  const [form, setForm] = useState({
    name: "", rollno: "", phone: "", email: "",
    ldap: "", dept: "", year: "", consent: false,
  });
  const [screenshot, setScreenshot] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(null);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef(null);

  const set = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setScreenshot(file);
    setScreenshotPreview(URL.createObjectURL(file));
  };

  const handleSubmit =async () => {
    const { name, rollno, phone, email, ldap, dept, year } = form;
    if (!name || !rollno || !phone || !email || !ldap || !dept || !year) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!screenshot) {
      setError("Please upload a screenshot of your payment.");
      return;
    }
    if (!form.consent) {
      setError("Please confirm your registration by checking the declaration.");
      return;
    }
    setError("");

    try{
        let token=localStorage.getItem('access_token');
        if(isTokenExpired(token)){
            token=await refreshAccessToken();
            if(!token) return;
        }
        const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result); // result is "data:image/png;base64,....."
        reader.onerror = reject;
        reader.readAsDataURL(screenshot);
        });

        const res=await apiFetch("/auth/register/",{
            method:'POST',
            body:JSON.stringify({
                form:JSON.stringify(form),
                screenshot:base64
            })
        });

        if(!res) return;
        const data=await res.json();

       if(res.ok){
            console.log("Submitted!",data.message);
            setSubmitted(true);
        }else{
            setError(data.error || "Something went wrong. Please try again.");
        }
    }catch(e){
        console.log("Network Error:",e);
        setError("Network error. Please check your connection and try again.");
    }
}

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans">
      <div className="max-w-2xl mx-auto">

        {/* ── Header ── */}
        <div className="border-b-2 border-[#2563ab] flex items-center gap-6 px-8 py-7">
          <div className="w-16 h-16 rounded-full bg-white/5 border-2 border-[#4a90d9] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 38 38" width={38} height={38} fill="none">
              <circle cx="19" cy="19" r="17" stroke="#4a90d9" strokeWidth="1.5" />
              <path d="M9 26 L19 10 L29 26" stroke="#7ca8d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 21 L26 21" stroke="#4a90d9" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="19" cy="10" r="2.5" fill="#4a90d9" />
            </svg>
          </div>
          <div>
            <p className="text-[22px] font-medium text-[#e8f0fe] tracking-tight">SARC Shadow Program</p>
            <p className="text-[13px] text-[#7ca8d8] uppercase tracking-widest">
              Student Academic Resources Centre · IIT Bombay
            </p>
          </div>
        </div>

        {/* ── Badge row ── */}
        <div className="bg-[#111111] border-b border-[#1e3d6e] px-8 py-2 flex flex-wrap gap-3 items-center">
          <span className="text-[11px] font-medium tracking-wide px-2.5 py-0.5 rounded-full bg-[#0d1e3a] text-[#7ca8d8] border border-[#2563ab]">
            📅 2025–26 Cohort
          </span>
          <span className="text-[11px] font-medium tracking-wide px-2.5 py-0.5 rounded-full bg-[#1a1000] text-[#d4a93a] border border-[#7c5a1a]">
            ⭐ Mentorship Initiative
          </span>
          <span className="text-[11px] font-medium tracking-wide px-2.5 py-0.5 rounded-full bg-[#0d1e3a] text-[#7ca8d8] border border-[#2563ab]">
            👥 Peer Learning
          </span>
        </div>

        {/* ── Form body ── */}
        <div className="px-8 pb-12">

          {/* Intro */}
          <div className="mt-6 bg-[#111111] border border-[#1e1e1e] border-l-[3px] border-l-[#2563ab] rounded-r-lg px-4 py-3">
            <p className="text-[13px] text-[#6a90b8] leading-relaxed">
              The <span className="text-[#4a90d9] font-medium">Shadow Program</span> pairs junior students
              with senior mentors for academic guidance, research exposure, and personal development.
              Fill in the details below to register for the current cycle.
            </p>
          </div>

          {/* ── Personal Details ── */}
          <SectionLabel>👤 Personal details</SectionLabel>
          <div className="grid grid-cols-2 gap-3.5">

            <Field label="Name" required className="col-span-2">
              <input className={inputClass} placeholder="Full name as per institute records" value={form.name} onChange={set("name")} />
            </Field>

            <Field label="Roll Number" required>
              <input className={inputClass} placeholder="e.g. 23B030012" value={form.rollno} onChange={set("rollno")} />
            </Field>

            <Field label="Contact Number" required>
              <input className={inputClass} type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set("phone")} />
            </Field>

            <Field label="Email ID" required>
              <input className={inputClass} type="email" placeholder="yourname@iitb.ac.in" value={form.email} onChange={set("email")} />
            </Field>

            <Field label="LDAP ID" required>
              <input className={inputClass} placeholder="e.g. arjun.sharma" value={form.ldap} onChange={set("ldap")} />
            </Field>

          </div>

          {/* ── Academic Details ── */}
          <SectionLabel>🎓 Academic details</SectionLabel>
          <div className="grid grid-cols-2 gap-3.5">

            <Field label="Department" required>
              <select className={selectClass} value={form.dept} onChange={set("dept")}>
                <option value="">Select department</option>
                {DEPARTMENTS.map((d) => <option key={d} className="bg-[#111111]">{d}</option>)}
              </select>
            </Field>

            <Field label="Year of Study" required>
              <select className={selectClass} value={form.year} onChange={set("year")}>
                <option value="">Select year</option>
                {YEARS.map((y) => <option key={y} className="bg-[#111111]">{y}</option>)}
              </select>
            </Field>

          </div>

          {/* ── Payment Screenshot ── */}
          <SectionLabel>💳 Payment screenshot</SectionLabel>

          {/* QR / Scanner placeholder */}
          <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-5 flex flex-col items-center gap-3">
            <p className="text-[12px] text-[#4a90d9] uppercase tracking-widest font-medium">Scan to Pay</p>

            {/* QR placeholder */}
            <div className="w-36 h-36 bg-[#0a0a0a] border border-[#2563ab] rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 100 100" width={120} height={120} fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer corners */}
                <rect x="8" y="8" width="28" height="28" rx="3" stroke="#4a90d9" strokeWidth="4" fill="none"/>
                <rect x="8" y="8" width="14" height="14" rx="1" fill="#4a90d9"/>
                <rect x="64" y="8" width="28" height="28" rx="3" stroke="#4a90d9" strokeWidth="4" fill="none"/>
                <rect x="64" y="8" width="14" height="14" rx="1" fill="#4a90d9"/>
                <rect x="8" y="64" width="28" height="28" rx="3" stroke="#4a90d9" strokeWidth="4" fill="none"/>
                <rect x="8" y="64" width="14" height="14" rx="1" fill="#4a90d9"/>
                {/* Center pattern */}
                <rect x="42" y="8" width="6" height="6" fill="#2563ab"/>
                <rect x="52" y="8" width="6" height="6" fill="#2563ab"/>
                <rect x="42" y="18" width="6" height="6" fill="#2563ab"/>
                <rect x="52" y="22" width="6" height="6" fill="#2563ab"/>
                <rect x="8" y="42" width="6" height="6" fill="#2563ab"/>
                <rect x="18" y="42" width="6" height="6" fill="#2563ab"/>
                <rect x="8" y="52" width="6" height="6" fill="#2563ab"/>
                <rect x="42" y="42" width="18" height="6" fill="#2563ab"/>
                <rect x="42" y="52" width="6" height="18" fill="#2563ab"/>
                <rect x="52" y="60" width="6" height="10" fill="#2563ab"/>
                <rect x="62" y="52" width="6" height="6" fill="#2563ab"/>
                <rect x="70" y="60" width="6" height="6" fill="#2563ab"/>
                <rect x="62" y="68" width="6" height="6" fill="#2563ab"/>
                <rect x="78" y="42" width="6" height="6" fill="#2563ab"/>
                <rect x="70" y="42" width="6" height="6" fill="#2563ab"/>
                <rect x="78" y="52" width="6" height="6" fill="#2563ab"/>
                <rect x="22" y="52" width="6" height="6" fill="#2563ab"/>
              </svg>
            </div>

            <div className="text-center">
              <p className="text-[13px] text-[#d0e4f7] font-medium">SARC · IIT Bombay</p>
              <p className="text-[11px] text-[#4a6a8a] mt-0.5">UPI · Any payment app</p>
            </div>

            {/* Refund notice */}
            <div className="w-full mt-1 bg-[#0d1e0d] border border-[#1e3d1e] rounded-lg px-3.5 py-2.5 flex items-start gap-2">
              <span className="text-[#4caf50] text-[15px] mt-px">✓</span>
              <p className="text-[12px] text-[#5a9a5a] leading-relaxed">
                This amount will be <span className="text-[#7ac97a] font-medium">fully refunded</span> after you successfully attend the Shadow Program.
              </p>
            </div>
          </div>

          {/* Upload field */}
          <div className="mt-3.5">
            <Field label="Upload payment screenshot" required>
              <div
                onClick={() => fileRef.current.click()}
                className={`relative cursor-pointer border border-dashed rounded-lg px-4 py-5 flex flex-col items-center gap-2 transition-all
                  ${screenshotPreview
                    ? "border-[#2563ab] bg-[#0d1e3a]/40"
                    : "border-[#1e1e1e] bg-[#111111] hover:border-[#2563ab] hover:bg-[#0d1e3a]/20"
                  }`}
              >
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFile}
                />
                {screenshotPreview ? (
                  <>
                    <img src={screenshotPreview} alt="Payment screenshot" className="max-h-40 rounded-md object-contain" />
                    <p className="text-[11px] text-[#4a90d9]">{screenshot?.name} · Click to change</p>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-[#0d1e3a] border border-[#2563ab] flex items-center justify-center text-[20px]">
                      📎
                    </div>
                    <p className="text-[13px] text-[#7ca8d8]">Click to upload screenshot</p>
                    <p className="text-[11px] text-[#333]">PNG, JPG or JPEG · Max 5 MB</p>
                  </>
                )}
              </div>
            </Field>
          </div>

          {/* ── Declaration ── */}
          <SectionLabel>📋 Declaration</SectionLabel>

          <div className="flex items-start gap-3 bg-[#111111] border border-[#1e1e1e] rounded-lg p-4">
            <input
              type="checkbox"
              id="consent"
              checked={form.consent}
              onChange={set("consent")}
              className="w-4 h-4 mt-0.5 shrink-0 accent-[#2563ab] cursor-pointer"
            />
            <label htmlFor="consent" className="text-[12px] text-[#6a90b8] leading-relaxed cursor-pointer">
              I confirm my registration for the Shadow Program and I understand that I will be attending
              this program at my own risk, and{" "}
              <span className="text-[#7ca8d8] font-medium">SARC will not be responsible</span>{" "}
              for any mishaps.
            </label>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-3 bg-[#1a0a0a] border border-[#3d1e1e] rounded-lg px-3.5 py-2.5">
              <p className="text-[#e24b4a] text-[12px]">⚠ {error}</p>
            </div>
          )}

          {/* ── Submit ── */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <button
              onClick={handleSubmit}
              disabled={submitted}
              className={`w-full flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-[15px] font-medium text-white tracking-wide transition-all
                ${submitted
                  ? "bg-[#0f6e56] cursor-default"
                  : "bg-[#2563ab] hover:bg-[#1a4d8f] active:scale-[0.99] cursor-pointer"
                }`}
            >
              {submitted ? "✓ Registration submitted!" : "→ Submit registration"}
            </button>
            <p className="text-[12px] text-[#333] text-center">
              Applications reviewed by SARC IIT Bombay · Shortlisted applicants will be notified via email
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
