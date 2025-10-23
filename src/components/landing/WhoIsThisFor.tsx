export default function WhoIsThisFor() {
  return (
    <div className="w-full flex justify-center px-5 -translate-y-12 relative z-10">
      <div className="bg-white/80 dark:bg-black/80 shadow rounded gap-x-2 px-5 py-4 w-full max-w-xs md:max-w-2xl flex flex-col justify-around md:flex-row">
        <Box
          question="Who is this for?"
          answer={
            <>
              <span>Students & </span>
              <span>Professionals</span>
            </>
          }
        />
        <div className="bg-border w-full h-px md:h-full md:w-px my-1" />
        <Box
          question="Class format"
          answer={
            <>
              <span>Offline & </span>
              <span>Online Available</span>
            </>
          }
        />
        <div className="bg-border w-full h-px md:h-full md:w-px my-1" />
        <Box
          question="Training method"
          answer={
            <>
              <span>Teaching + </span>
              <span>Project Based</span>
            </>
          }
        />
      </div>
    </div>
  );
}

function Box({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full justify-between">
      <span className="text-muted-foreground text-sm pb-1 pt-1.5">
        {question}
      </span>

      <div className="flex flex-row md:flex-col gap-x-1 pb-1.5 text-lg">
        {answer}
      </div>
    </div>
  );
}
