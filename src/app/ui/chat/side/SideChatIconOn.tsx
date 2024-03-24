import SpeechBubbleBottom from "@/components/atoms/SpeechBubbleBottom";
import React from "react";

export default function SideChatIconOn({children, bubbleText}: { children: React.ReactNode, bubbleText: String}) {
  return (
      <>
        <div className="flex justify-between items-center absolute z-0 right-2">
          <div className="w-12 h-8 side-gradient-on from-transparent to-white"></div>
          <div className="group/button relative">
            {children}
            <div className="absolute -top-10 -left-4 hidden group-hover/button:block">
              <SpeechBubbleBottom text={bubbleText}/>
            </div>
          </div>
        </div>
      </>
  );
}
