import { useState } from "react";

export default function MailingListSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?1?\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const validate = () => {
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (phone && !phoneRegex.test(phone)) {
      newErrors.phone = "Invalid phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(
        import.meta.env.VITE_API_URL + "/api/mailinglist-subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone: phone || "",
            role: "recipient",
          }),
        }
      );

      const data = await res.json();
      console.log(data)

      if (!res.ok) throw new Error(data.error);

      setStatus("success");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setErrors({});
    } catch (err) {
      setStatus("error");
    }
  };

  const inputClass = (hasError) =>
    `w-full rounded border p-2 focus:outline-none ${
      hasError
        ? "border-red-500 focus:ring-2 focus:ring-red-400"
        : "border-gray-300 focus:ring-2 focus:ring-emerald-400"
    }`;

  const clearError = (field) =>
    setErrors((prev) => ({ ...prev, [field]: undefined }));

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border p-6">
      <h2 className="text-xl font-semibold">Mailing List Signup</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="First name *"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            clearError("firstName");
          }}
          className={inputClass(errors.firstName)}
        />

        <input
          type="text"
          placeholder="Last name *"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            clearError("lastName");
          }}
          className={inputClass(errors.lastName)}
        />
      </div>

      <input
        type="email"
        placeholder="Email address *"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          clearError("email");
        }}
        className={inputClass(errors.email)}
      />

      <input
        type="tel"
        placeholder="Phone number (optional)"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          clearError("phone");
        }}
        className={inputClass(errors.phone)}
      />

      <p className="text-xs text-gray-500">
        * First name, last name, and email are required.
      </p>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-emerald-700 py-2 text-white hover:bg-emerald-800 disabled:opacity-50"
      >
        {status === "loading" ? "Submitting..." : "Sign up"}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-600">
          Successfully signed up!
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600">
          Please fix the highlighted fields.
        </p>
      )}
    </form>
  );
}
