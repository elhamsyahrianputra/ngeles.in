"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Copy, Github, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function HomePage() {
  const [situation, setSituation] = useState("");
  const [excuses, setExcuses] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateExcuses = async () => {
    if (!situation.trim()) {
      toast({
        title: "Oops!",
        description: "Tulis situasimu dulu ya!",
        variant: "destructive",
        style: {position: 'relative', 'zIndex': 5, 'backgroundColor': '#f5f5f7'}
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        '/api/generate-excuses',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ situation }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate excuses");
      }

      const data = await response.json();
      setExcuses(data.excuses.join(""));
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal generate alasan. Coba lagi ya!",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Berhasil!",
        description: "Alasan sudah disalin ke clipboard",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal menyalin teks",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#2D2D2D]">ngeles.in</div>
        <a
          href="https://github.com/elhamsyahrianputra/ngeles.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 text-[#2D2D2D] hover:text-[#F7E546] hover:brightness-[.85] transition-colors"
        >
          <Github size={24} />
          <span className="hidden md:inline">elhamsyahrianputra</span>
        </a>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] mb-6">
            Butuh Alasan Cerdas?
          </h1>
          <p className="text-lg md:text-xl text-[#2D2D2D] mb-12 max-w-3xl mx-auto leading-relaxed">
            Cukup tulis situasimu di bawah dan biarkan kami carikan alasan dari
            situasimu.
          </p>

          {/* Input Form */}
          <div className="max-w-2xl mx-auto space-y-6">
            <Textarea
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              placeholder="Jelaskan situasinya di sini..."
              className="min-h-[120px] text-lg p-6 rounded-2xl border-2 border-gray-200 focus:border-[#F7E546] focus:brightness-[.85] focus:ring-0 resize-none shadow-sm"
            />
            <Button
              onClick={generateExcuses}
              disabled={isLoading}
              className="w-full md:w-auto px-12 py-4 text-lg font-semibold bg-[#F7E546] hover:bg-[#F7E546]/90 text-[#2D2D2D] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sedang Berpikir...
                </>
              ) : (
                "Cari Alasan!"
              )}
            </Button>
          </div>
        </div>

        {/* Results Section */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-[#F7E546] brightness-95 rounded-full animate-pulse"></div>
              <div
                className="w-3 h-3 bg-[#F7E546] brightness-95 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 bg-[#F7E546] brightness-95 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        )}

        {excuses && (
          <div className="space-y-4 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-[#2D2D2D] text-center mb-8">
              Alasan Cerdas Untukmu:
            </h2>
            <div className="grid gap-4 md:gap-6">
              <Card className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 animate-in slide-in-from-bottom duration-500">
                <div className="flex justify-between items-start gap-4">
                  <p className="text-[#2D2D2D] leading-relaxed flex-1">
                    {excuses}
                  </p>
                  <Button
                    onClick={() => copyToClipboard(excuses)}
                    variant="ghost"
                    size="sm"
                    className="shrink-0 hover:bg-[#F7E546]/20 rounded-xl"
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-[#2D2D2D]">
        © 2025 ngeles.in - Dibuat dengan bijak 😉
      </footer>
    </div>
  );
}
