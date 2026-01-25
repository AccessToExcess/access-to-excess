import MailchimpSignupForm from "../components/MailchimpSignupForm";

export default function MailingListSignup() {
  return (
    <div className="animate-fade-in bg-stone-50 min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black mb-3">Mailing List Signup</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Stay updated with our latest food rescue events, community news, and opportunities to get involved.
          </p>
        </div>

        {/* Reusable Mailchimp form - uses default variant */}
        <MailchimpSignupForm variant="default" />
      </div>
    </div>
  );
}
