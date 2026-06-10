"use client";

import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type FormEvent,
  type ReactNode,
  type SetStateAction,
} from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiLayers,
  FiTarget,
  FiZap,
  FiFileText,
  FiUploadCloud,
} from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const platformOptions = ["PC Games", "Mobile Games"];

type ProcessCard = {
  icon: ReactNode;
  title: string;
  text: string;
};

const processCards: ProcessCard[] = [
  {
    icon: <FiZap />,
    title: "Prototype",
    text: "Show us the core idea. A small but playable prototype is stronger than a big unfinished pitch.",
  },
  {
    icon: <FiTarget />,
    title: "Game Feel",
    text: "Focus on the moment-to-moment experience. Controls, rhythm, tension, and clarity matter.",
  },
  {
    icon: <FiLayers />,
    title: "Visual Direction",
    text: "Your game does not need final art, but it should have a clear mood, identity, and intention.",
  },
  {
    icon: <FiFileText />,
    title: "Pitch Clearly",
    text: "Explain what makes your game different, who it is for, and why players should care.",
  },
];

type ShareGameFormData = {
  firstName: string;
  lastName: string;
  email: string;
  platform: string;
  gameGenre: string;
  gameDescription: string;
  pitchFile: File | null;
};

type ShareGameFormErrors = Partial<Record<keyof ShareGameFormData, string>>;

type LineInputProps = {
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type LineTextareaProps = {
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

type FileUploadProps = {
  label: string;
  fileName: string;
  error?: string;
  onChange: (file: File | null) => void;
};

type PlatformSelectProps = {
  value: string;
  error?: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onSelect: (platform: string) => void;
};

export default function ShareYourGamePage() {
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [errors, setErrors] = useState<ShareGameFormErrors>({});
  const [pitchFileName, setPitchFileName] = useState("");

  const [formData, setFormData] = useState<ShareGameFormData>({
    firstName: "",
    lastName: "",
    email: "",
    platform: "",
    gameGenre: "",
    gameDescription: "",
    pitchFile: null,
  });

  const handleChange = <K extends keyof ShareGameFormData>(
    field: K,
    value: ShareGameFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: ShareGameFormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "This field is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "This field is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "This field is required.";
    }

    if (!formData.platform) {
      newErrors.platform = "Please select a platform.";
    }

    if (!formData.gameGenre.trim()) {
      newErrors.gameGenre = "This field is required.";
    }

    if (!formData.gameDescription.trim()) {
      newErrors.gameDescription = "This field is required.";
    }

    if (!formData.pitchFile) {
      newErrors.pitchFile = "Please upload your game pitch file.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log("Game submitted:", formData);
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#0d0d0d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-40 pb-28 sm:px-8 md:px-10 lg:px-16 lg:pt-48 lg:pb-36">
        <div
          className="absolute inset-0 
          bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.09),transparent_34%),
          radial-gradient(circle_at_80%_28%,rgba(193,32,48,0.28),transparent_42%),
          linear-gradient(180deg,#151010_0%,#0d0d0d_100%)]"
        />

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="pointer-events-none absolute left-1/2 top-1/2 select-none -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[15vw] font-black tracking-[-0.8vw] text-white/5"
        >
          PUBLISH
        </motion.h1>

        <div className="relative z-10 mx-auto w-full max-w-[1200px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.4em] text-white/45"
          >
            Share Your Game
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 text-[48px] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-[68px] md:text-[88px] lg:text-[110px]"
          >
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              Bring your game
            </span>
            <br />
            <span className="bg-gradient-to-b from-white to-[#c12030] bg-clip-text text-transparent">
              to the next stage.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-8 max-w-[700px] text-[16px] leading-8 text-white/65 sm:text-[18px]"
          >
            We work with developers who have a strong idea, a playable direction,
            and the ambition to turn a project into a memorable game.
          </motion.p>
        </div>
      </section>

      {/* PROCESS CARDS */}
      <section className="mx-auto w-full max-w-[1500px] px-6 pb-12 sm:px-8 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.25 }}
              className="group rounded-[28px] border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.055]"
            >
              <div className="text-[28px] text-white/60 transition-colors duration-300 group-hover:text-[#c12030]">
                {card.icon}
              </div>

              <h3 className="mt-7 text-[22px] font-medium tracking-[-0.03em] text-white">
                {card.title}
              </h3>

              <p className="mt-4 text-[14px] leading-7 text-white/55">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto w-full max-w-[1500px] px-6 py-20 sm:px-8 md:px-10 lg:px-16 lg:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-4"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/38">
              Submission
            </p>

            <h2 className="mt-5 max-w-[420px] text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[44px]">
              Tell us about your game.
            </h2>

            <p className="mt-6 max-w-[420px] text-[15px] leading-7 text-white/62 sm:text-[16px]">
              Share the essentials clearly. We want to understand the idea, the
              audience, the platform, and what makes your game worth publishing.
            </p>

            <div className="mt-8 max-w-[420px]">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                Before You Submit
              </p>

              <ul className="mt-5 space-y-4 text-[14px] leading-7 text-white/58">
                <li className="flex gap-3">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c12030]" />
                  <span>Send a playable build or prototype when possible.</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c12030]" />
                  <span>Explain the core loop in simple, direct words.</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c12030]" />
                  <span>Do not hide the current state of the project.</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c12030]" />
                  <span>Show what makes your game different from others.</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c12030]" />
                  <span>Keep the description focused, honest, and practical.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              <LineInput
                label="First Name"
                placeholder="First name"
                value={formData.firstName}
                error={errors.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />

              <LineInput
                label="Last Name"
                placeholder="Last name"
                value={formData.lastName}
                error={errors.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />

              <LineInput
                label="Email"
                placeholder="you@example.com"
                value={formData.email}
                error={errors.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />

              <PlatformSelect
                value={formData.platform}
                error={errors.platform}
                open={platformOpen}
                setOpen={setPlatformOpen}
                onSelect={(platform) => {
                  handleChange("platform", platform);
                  setPlatformOpen(false);
                }}
              />

              <LineInput
                label="Game Genre"
                placeholder="Action, Puzzle, Horror..."
                value={formData.gameGenre}
                error={errors.gameGenre}
                onChange={(e) => handleChange("gameGenre", e.target.value)}
              />
            </div>

            <div className="mt-10">
              <LineTextarea
                label="Game Description"
                placeholder="Tell us about your game, its core loop, visual direction, current stage, and publishing needs."
                value={formData.gameDescription}
                error={errors.gameDescription}
                onChange={(e) =>
                  handleChange("gameDescription", e.target.value)
                }
              />
            </div>

            <div className="mt-10">
              <FileUpload
                label="Game Pitch / Presentation"
                fileName={pitchFileName}
                error={errors.pitchFile}
                onChange={(file) => {
                  setPitchFileName(file ? file.name : "");
                  handleChange("pitchFile", file);
                }}
              />
            </div>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <label className="group flex cursor-pointer items-center gap-3">
                <button
                  type="button"
                  onClick={() => setAgreementChecked((prev) => !prev)}
                  className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded border transition-all duration-300 ${
                    agreementChecked
                      ? "border-white bg-white"
                      : "border-white/25 bg-transparent hover:border-white"
                  }`}
                >
                  {agreementChecked && (
                    <FaCheck className="text-[13px] text-black" />
                  )}
                </button>

                <span className="text-[13px] leading-6 text-white/58">
                  {!agreementChecked ? (
                    "Privacy Policy"
                  ) : (
                    <>
                      Please read our{" "}
                      <Link
                        href="/privacy-policy"
                        className="font-medium text-[#c12030] transition-opacity duration-300 hover:opacity-80"
                      >
                        Privacy
                      </Link>{" "}
                      policy.
                    </>
                  )}
                </span>
              </label>

              <button
                type="submit"
                disabled={!agreementChecked}
                className={`group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  agreementChecked
                    ? "cursor-pointer bg-white text-[#0d0d0d] hover:scale-[1.02]"
                    : "cursor-not-allowed bg-white/15 text-white/35"
                }`}
              >
                Submit Game
                <FiArrowUpRight
                  className={`transition-transform duration-300 ${
                    agreementChecked
                      ? "group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                      : ""
                  }`}
                />
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}

function LineInput({
  label,
  placeholder,
  value,
  onChange,
  error,
}: LineInputProps) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.24em] text-white/38">
        {label}
      </label>

      <div
        className={`group relative mt-4 border-b transition-colors duration-300 ${
          error ? "border-[#c12030]" : "border-white/15"
        }`}
      >
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent pb-4 text-[17px] text-white outline-none placeholder:text-white/25"
        />

        <span
          className={`absolute bottom-[-1px] left-0 h-[1px] w-full origin-left transition-transform duration-300 ease-out group-focus-within:scale-x-100 ${
            error ? "scale-x-100 bg-[#c12030]" : "scale-x-0 bg-white"
          }`}
        />
      </div>

      {error && <p className="mt-3 text-[12px] text-[#c12030]">{error}</p>}
    </div>
  );
}

function LineTextarea({
  label,
  placeholder,
  value,
  onChange,
  error,
}: LineTextareaProps) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.24em] text-white/38">
        {label}
      </label>

      <div
        className={`group relative mt-4 border-b transition-colors duration-300 ${
          error ? "border-[#c12030]" : "border-white/15"
        }`}
      >
        <textarea
          rows={7}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full resize-none bg-transparent pb-4 text-[17px] leading-7 text-white outline-none placeholder:text-white/25"
        />

        <span
          className={`absolute bottom-[-1px] left-0 h-[1px] w-full origin-left transition-transform duration-300 ease-out group-focus-within:scale-x-100 ${
            error ? "scale-x-100 bg-[#c12030]" : "scale-x-0 bg-white"
          }`}
        />
      </div>

      {error && <p className="mt-3 text-[12px] text-[#c12030]">{error}</p>}
    </div>
  );
}

function FileUpload({ label, fileName, onChange, error }: FileUploadProps) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.24em] text-white/38">
        {label}
      </label>

      <label
        className={`group mt-4 flex cursor-pointer flex-col items-center justify-center rounded-[28px] border border-dashed px-6 py-10 text-center transition-all duration-300 ${
          error
            ? "border-[#c12030] bg-[#c12030]/10"
            : "border-white/15 bg-white/[0.025] hover:border-white/35 hover:bg-white/[0.04]"
        }`}
      >
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            onChange(file);
          }}
        />

        <FiUploadCloud
          className={`text-[34px] transition-transform duration-300 group-hover:-translate-y-1 ${
            error ? "text-[#c12030]" : "text-white/55"
          }`}
        />

        <span
          className={`mt-4 text-[15px] ${
            error ? "text-[#c12030]" : "text-white/70"
          }`}
        >
          {fileName || "Upload PDF / DOC / DOCX"}
        </span>

        <span className="mt-2 text-[12px] text-white/35">
          Game pitch, presentation or publishing document
        </span>
      </label>

      {error && <p className="mt-3 text-[12px] text-[#c12030]">{error}</p>}
    </div>
  );
}

function PlatformSelect({
  value,
  error,
  open,
  setOpen,
  onSelect,
}: PlatformSelectProps) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.24em] text-white/38">
        Platform
      </label>

      <div className="relative mt-4">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`group relative flex w-full items-center justify-between border-b bg-transparent pb-4 text-left text-[17px] outline-none transition-colors duration-300 cursor-pointer ${
            error
              ? "border-[#c12030] text-[#c12030]"
              : "border-white/15 text-white hover:border-white/35"
          }`}
        >
          <span className={value ? "text-white" : "text-white/25"}>
            {value || "Select platform"}
          </span>

          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <FiChevronDown />
          </motion.span>

          <span
            className={`absolute bottom-[-1px] left-0 h-[1px] w-full origin-left transition-transform duration-300 ease-out ${
              open || error ? "scale-x-100" : "scale-x-0"
            } ${error ? "bg-[#c12030]" : "bg-white"}`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="absolute left-0 right-0 top-[calc(100%+12px)] z-20 overflow-hidden rounded-[22px] border border-white/10 bg-[#151515] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
            >
              {platformOptions.map((platform) => (
                <button
                  key={platform}
                  type="button"
                  onClick={() => onSelect(platform)}
                  className={`w-full rounded-2xl px-4 py-3 text-left text-[14px] transition-all duration-200 ${
                    value === platform
                      ? "bg-white text-[#0d0d0d]"
                      : "text-white/68 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {platform}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && <p className="mt-3 text-[12px] text-[#c12030]">{error}</p>}
    </div>
  );
}