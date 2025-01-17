import React from "react";

function Footer({ footerRef }) {
  const travelQuotes = [
    "“Life is short and the world is wide.”",
  ];

  return (
    <div
      ref={footerRef}
      className="footer w-full flex flex-col items-center justify-center md:p-6 py-4 border-t bg-gradient-to-b from-secondary/90 to-secondary/70"
    >
      <p className="text-center text-lg font-semibold text-primary mb-2 ">
        Explore, Dream, Discover
      </p>
      <div className="quotes text-center text-sm text-foreground ">
        {travelQuotes.map((quote, index) => (
          <p key={index} className="mb-2 italic">
            {quote}
          </p>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-4">
        © {new Date().getFullYear()} PlanYourTrip. Let your adventure begin!
      </p>
    </div>
  );
}

export default Footer;
