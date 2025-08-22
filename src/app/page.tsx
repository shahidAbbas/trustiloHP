// app/confirmation/page.tsx
import AnimatedIcon from "@/components/AnimatedIcon";

export default function ConfirmationPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen bg-white pb-0"
        style={{ paddingTop: 'calc(var(--spacing) * 16 + 156px)' }}
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
      </div>
    </>
  );
}
