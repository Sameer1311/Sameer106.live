"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const DoneComponent = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-green-600 to-emerald-400 text-white px-8 py-6 rounded-2xl shadow-xl z-50 animate-in fade-in slide-in-from-bottom duration-500">
      <div className="flex flex-col items-center space-y-3 text-center">
        <CheckCircle2 size={48} className="text-white drop-shadow" />
        <h1 className="text-2xl font-bold">Thank You! 🎉</h1>
        <h2 className="text-md">
          I’ve received your message and will get back to you shortly.
        </h2>
        <Button
          variant="outline"
          className="text-green-600 bg-white hover:bg-gray-100 mt-2 font-semibold"
          onClick={() => setVisible(false)}
        >
          Back to Form
        </Button>
      </div>
    </div>
  );
};

export default DoneComponent;
