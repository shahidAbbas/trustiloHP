// app/confirmation/page.tsx
import AnimatedIcon from "@/components/AnimatedIcon";
import { RedirectButton } from "@/components/RedirectButton";

export default function ConfirmationPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen bg-white pb-0"
        style={{ paddingTop: `calc(var(--spacing) * 16 + ${process.env.TOP_OFFSET ?? 176}px)` }}
      >
        <div className="mb-6"><AnimatedIcon /></div>

        <span className="text-lg font-medium text-gray-900">
          Ready for Confirmation
        </span>

        {/* <button
          className="mt-4 px-6 py-2 border border-[#1C69D4]
             text-[16px] leading-6 font-medium text-[#1C69D4] font-barlow
             rounded-[4px] bg-[#1C69D440]"
        >
          Trusted Channel Online
        </button> */}

        <RedirectButton tabName={process.env.SWITCH_TO_TAB || ''} redirectServer={process.env.KOBIL_REDIRECT_SERVER || ''} />
        <img className="fixed bottom-5 left-4 w-16 h-16 max-w-full object-contain" src='/poweredbykobil.png' alt="Whitelabel Icon"></img>
      </div>

    </>
  );
}
