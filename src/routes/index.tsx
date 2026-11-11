import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect, useRef } from "react";
import {
  Download,
  Printer,
  FileText,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Coins,
  CheckCircle2,
  Loader2,
  Info,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { SlidePage1 } from "@/components/deck/SlidePage1";
import { SlidePage2 } from "@/components/deck/SlidePage2";
import { SlidePage3 } from "@/components/deck/SlidePage3";
import { SlidePage4 } from "@/components/deck/SlidePage4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Liivrr-thon Campaign Budget | Pan-Africa A4 Document Deck" },
      {
        name: "description",
        content:
          "A 4–5 week Pan-African virtual sprint campaign & operational budget document across Africa (featuring South Africa, Nigeria, Kenya and Mozambique as key hub examples).",
      },
    ],
  }),
  component: Index,
});

const PDF_PRIMARY_PATH = "/liivrr-thon-pan-african-campaign-budget.pdf";
const PDF_ASSET_PATH = "/assets/aistudio/liivrr-thon-campaign-budget__1__da473dfd.pdf";

function Index() {
  const [activeTab, setActiveTab] = useState<"all" | "1" | "2" | "3" | "4">("all");
  const [viewMode, setViewMode] = useState<"deck" | "pdf">("deck");
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showCurrencyRef, setShowCurrencyRef] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadProgress, setDownloadProgress] = useState<string | null>(null);
  const [showDownloadMenu, setShowDownloadMenu] = useState<boolean>(false);
  const downloadMenuRef = useRef<HTMLDivElement>(null);

  // Close download menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(e.target as Node)) {
        setShowDownloadMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation for slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "deck") return;
      if (e.key === "ArrowRight") {
        if (activeTab === "1") setActiveTab("2");
        else if (activeTab === "2") setActiveTab("3");
        else if (activeTab === "3") setActiveTab("4");
        else if (activeTab === "all") setActiveTab("1");
      } else if (e.key === "ArrowLeft") {
        if (activeTab === "4") setActiveTab("3");
        else if (activeTab === "3") setActiveTab("2");
        else if (activeTab === "2") setActiveTab("1");
        else if (activeTab === "1") setActiveTab("all");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab, viewMode]);

  const handlePrint = () => {
    toast.info(
      "Opening print dialog. Select 'Save as PDF' and check 'Background graphics' for exact styling.",
      {
        duration: 5000,
      },
    );
    setTimeout(() => {
      window.print();
    }, 250);
  };

  /**
   * Downloads the verified updated Pan-African PDF directly containing all slide updates.
   */
  const handleDownloadUpdatedPdf = async () => {
    setShowDownloadMenu(false);
    setIsDownloading(true);
    setDownloadProgress("Fetching updated PDF...");
    const toastId = toast.loading("Downloading updated Pan-African document...");

    try {
      const response = await fetch(`${PDF_PRIMARY_PATH}?t=${Date.now()}`);
      if (!response.ok) {
        throw new Error(`Fetch status: ${response.status}`);
      }
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "liivrr-thon-pan-african-campaign-budget.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 2500);

      toast.success("Downloaded: liivrr-thon-pan-african-campaign-budget.pdf (Updated Document)", {
        id: toastId,
      });
    } catch (err) {
      console.warn("Direct blob download failed, trying direct link fallback:", err);
      try {
        const link = document.createElement("a");
        link.href = `${PDF_PRIMARY_PATH}?t=${Date.now()}`;
        link.download = "liivrr-thon-pan-african-campaign-budget.pdf";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Updated Pan-African PDF download initiated", { id: toastId });
      } catch (fallbackErr) {
        console.error("Download fallback failed:", fallbackErr);
        toast.error("Download failed. Please try Print / Save as PDF.", { id: toastId });
      }
    } finally {
      setIsDownloading(false);
      setDownloadProgress(null);
    }
  };

  /**
   * Downloads the original imported pre-update PDF file.
   */
  const handleDownloadOriginalPdf = async () => {
    setShowDownloadMenu(false);
    setIsDownloading(true);
    toast.info("Downloading original imported document...");

    try {
      const response = await fetch(PDF_PRIMARY_PATH);
      if (!response.ok) throw new Error("Fetch failed");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "liivrr-thon-original-imported-budget.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 2000);

      toast.success("Original PDF downloaded!");
    } catch {
      window.open(PDF_ASSET_PATH, "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 flex flex-col font-sans">
      {/* Top Application Bar */}
      <header className="no-print sticky top-0 z-30 bg-[#0d1017]/95 backdrop-blur-md border-b border-zinc-800 px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Logo & Document Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-5 bg-amber-500 rounded-xs inline-block shadow-sm shadow-amber-500/50" />
              <span className="font-black text-sm sm:text-base tracking-wider text-white">
                LIIVRR-THON
              </span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold text-zinc-200">
                Pan-African Campaign &amp; Operational Budget
              </span>
              <span className="text-[10px] text-zinc-400">
                A4 Portrait Slide Deck · Pan-African Virtual Sprint (e.g. SA, NG, KE, MZ &amp;
                beyond)
              </span>
            </div>
          </div>

          {/* Controls & Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode Toggle: Interactive Deck vs Original PDF */}
            <div className="bg-[#141824] p-1 rounded-lg border border-zinc-800 flex items-center gap-1 text-xs">
              <button
                type="button"
                onClick={() => setViewMode("deck")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md font-medium transition-all ${
                  viewMode === "deck"
                    ? "bg-amber-500 text-black font-bold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Interactive high-fidelity A4 slide deck with all Pan-African updates"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">A4 Digital Deck</span>
                <span className="sm:hidden">Deck</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("pdf")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md font-medium transition-all ${
                  viewMode === "pdf"
                    ? "bg-amber-500 text-black font-bold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="View original uploaded PDF directly in viewer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Original PDF</span>
                <span className="sm:hidden">PDF</span>
              </button>
            </div>

            {/* Quick Currency Exchange Reference Button */}
            <button
              type="button"
              onClick={() => setShowCurrencyRef(!showCurrencyRef)}
              className={`p-2 rounded-lg border transition-all text-xs flex items-center gap-1.5 ${
                showCurrencyRef
                  ? "bg-amber-500/10 border-amber-500/50 text-amber-400"
                  : "bg-[#141824] border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
              title="Currency conversion reference"
            >
              <Coins className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[11px] font-medium">Currencies</span>
            </button>

            {/* Print / Save as PDF Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 bg-[#141824] border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-lg transition-all text-xs flex items-center gap-1.5"
              title="Print document or save clean A4 PDF via browser dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px] font-medium">Print / Save A4</span>
            </button>

            {/* Download Dropdown / Split Action */}
            <div className="relative inline-flex items-center" ref={downloadMenuRef}>
              <button
                type="button"
                onClick={handleDownloadUpdatedPdf}
                disabled={isDownloading}
                className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:opacity-75 disabled:cursor-wait text-black font-bold rounded-l-lg text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all shrink-0"
                title="Download PDF containing all latest Pan-African slide updates"
              >
                {isDownloading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5" />
                )}
                <span>
                  {isDownloading ? downloadProgress || "Generating..." : "Download Updated PDF"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                disabled={isDownloading}
                className="px-2 py-1.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-black border-l border-amber-600/40 font-bold rounded-r-lg text-xs flex items-center transition-all"
                title="More PDF download options"
                aria-label="More download options"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {/* Dropdown Menu */}
              {showDownloadMenu && (
                <div className="absolute right-0 top-full mt-1.5 w-64 bg-[#141824] border border-zinc-700 rounded-lg shadow-xl py-1.5 z-50 text-xs">
                  <div className="px-3 py-1 text-[10px] uppercase font-bold text-amber-500 tracking-wider">
                    Download Options
                  </div>
                  <button
                    type="button"
                    onClick={handleDownloadUpdatedPdf}
                    className="w-full text-left px-3 py-2 hover:bg-zinc-800 text-zinc-100 flex items-start gap-2.5 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Updated Pan-Africa PDF</p>
                      <p className="text-[10px] text-zinc-400">
                        Includes all slide changes &amp; Pan-African hubs
                      </p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadOriginalPdf}
                    className="w-full text-left px-3 py-2 hover:bg-zinc-800 text-zinc-100 flex items-start gap-2.5 transition-colors border-t border-zinc-800/80"
                  >
                    <FileText className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-zinc-200">Original Imported PDF</p>
                      <p className="text-[10px] text-zinc-400">Pre-update source vector document</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowDownloadMenu(false);
                      handlePrint();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-zinc-800 text-zinc-100 flex items-start gap-2.5 transition-colors border-t border-zinc-800/80"
                  >
                    <Printer className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-zinc-200">Print / Save as PDF</p>
                      <p className="text-[10px] text-zinc-400">Browser A4 print engine</p>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Currency Rates Bar (Collapsible) */}
        {showCurrencyRef && (
          <div className="max-w-7xl mx-auto mt-2.5 pt-2.5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold uppercase text-[10px] tracking-wider">
                Multi-Currency Equivalents (Budget Total: $15,400 USD):
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
              <span className="bg-[#141824] px-2 py-0.5 rounded border border-zinc-800 text-zinc-300">
                <strong className="text-amber-400">ZAR:</strong> ~R277,200 (1 USD ≈ R18.0)
              </span>
              <span className="bg-[#141824] px-2 py-0.5 rounded border border-zinc-800 text-zinc-300">
                <strong className="text-amber-400">NGN:</strong> ~₦23,870,000 (1 USD ≈ ₦1,550)
              </span>
              <span className="bg-[#141824] px-2 py-0.5 rounded border border-zinc-800 text-zinc-300">
                <strong className="text-amber-400">KES:</strong> ~KSh 1,986,600 (1 USD ≈ KSh 129)
              </span>
              <span className="bg-[#141824] px-2 py-0.5 rounded border border-zinc-800 text-zinc-300">
                <strong className="text-amber-400">MZN:</strong> ~MT 985,600 (1 USD ≈ MT 64)
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Sub-toolbar for Slide Navigation & Zoom (visible in Deck mode) */}
      {viewMode === "deck" && (
        <nav
          aria-label="Deck navigation"
          className="no-print sticky top-[57px] sm:top-[61px] z-20 bg-[#0a0c12]/90 backdrop-blur border-b border-zinc-800/80 px-3 sm:px-6 py-2"
        >
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2">
            {/* Page Tabs */}
            <div className="flex items-center gap-1 bg-[#10141f] p-1 rounded-md border border-zinc-800 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1 rounded font-medium transition-all ${
                  activeTab === "all"
                    ? "bg-zinc-800 text-white font-semibold shadow-xs"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                All Pages (4)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("1")}
                className={`px-3 py-1 rounded font-medium transition-all ${
                  activeTab === "1"
                    ? "bg-amber-500 text-black font-bold shadow-xs"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Page 1
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("2")}
                className={`px-3 py-1 rounded font-medium transition-all ${
                  activeTab === "2"
                    ? "bg-amber-500 text-black font-bold shadow-xs"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Page 2
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("3")}
                className={`px-3 py-1 rounded font-medium transition-all ${
                  activeTab === "3"
                    ? "bg-amber-500 text-black font-bold shadow-xs"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Page 3
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("4")}
                className={`px-3 py-1 rounded font-medium transition-all ${
                  activeTab === "4"
                    ? "bg-amber-500 text-black font-bold shadow-xs"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Page 4
              </button>
            </div>

            {/* Quick Step Previous / Next in Single Slide view */}
            {activeTab !== "all" && (
              <div className="flex items-center gap-1 text-xs">
                <button
                  type="button"
                  disabled={activeTab === "1"}
                  onClick={() => {
                    if (activeTab === "2") setActiveTab("1");
                    if (activeTab === "3") setActiveTab("2");
                    if (activeTab === "4") setActiveTab("3");
                  }}
                  className="p-1.5 rounded bg-[#10141f] border border-zinc-800 text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white"
                  title="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-zinc-400 px-1">0{activeTab} / 04</span>
                <button
                  type="button"
                  disabled={activeTab === "4"}
                  onClick={() => {
                    if (activeTab === "1") setActiveTab("2");
                    if (activeTab === "2") setActiveTab("3");
                    if (activeTab === "3") setActiveTab("4");
                  }}
                  className="p-1.5 rounded bg-[#10141f] border border-zinc-800 text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white"
                  title="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Zoom Controls */}
            <div className="flex items-center gap-1.5 bg-[#10141f] px-2 py-1 rounded-md border border-zinc-800 text-xs">
              <button
                type="button"
                onClick={() => setZoomLevel((prev) => Math.max(70, prev - 10))}
                className="p-1 text-zinc-400 hover:text-white transition-colors"
                title="Zoom out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-zinc-300 min-w-[38px] text-center text-[11px]">
                {zoomLevel}%
              </span>
              <button
                type="button"
                onClick={() => setZoomLevel((prev) => Math.min(130, prev + 10))}
                className="p-1 text-zinc-400 hover:text-white transition-colors"
                title="Zoom in"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              {zoomLevel !== 100 && (
                <button
                  type="button"
                  onClick={() => setZoomLevel(100)}
                  className="p-1 text-zinc-400 hover:text-amber-400 transition-colors ml-1"
                  title="Reset zoom to 100%"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              )}
              <div className="w-[1px] h-3.5 bg-zinc-800 mx-1" />
              <button
                type="button"
                onClick={handleToggleFullscreen}
                className="p-1 text-zinc-400 hover:text-white transition-colors"
                title="Toggle fullscreen presentation"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-3.5 h-3.5" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Main Viewport Container (Hidden during Print) */}
      <main className="no-print flex-1 overflow-auto p-3 sm:p-6 md:p-8 flex justify-center">
        {viewMode === "deck" ? (
          <div
            className="w-full flex flex-col items-center transition-transform duration-200 origin-top"
            style={{
              transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : undefined,
              transformOrigin: "top center",
            }}
          >
            {/* Quick formatting reassurance tip bar */}
            <div className="w-full max-w-[820px] mb-3 bg-[#10141f] border border-zinc-800/80 rounded-md px-3.5 py-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-400 gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>
                  Updated with <strong>Pan-African scope &amp; Targets</strong> across all 4 pages
                  (SA, NG, KE, MZ &amp; more).
                </span>
              </div>
              <button
                type="button"
                onClick={handleDownloadUpdatedPdf}
                disabled={isDownloading}
                className="text-amber-400 hover:text-amber-300 font-bold underline underline-offset-2 shrink-0 flex items-center gap-1"
              >
                <Download className="w-3 h-3" />
                <span>Download Updated PDF</span>
              </button>
            </div>

            {/* All Pages View */}
            {activeTab === "all" && (
              <div className="flex flex-col gap-8 w-full max-w-[820px]">
                <SlidePage1 />
                <SlidePage2 />
                <SlidePage3 />
                <SlidePage4 />
              </div>
            )}

            {/* Single Page View */}
            {activeTab === "1" && (
              <div className="w-full max-w-[820px]">
                <SlidePage1 />
              </div>
            )}
            {activeTab === "2" && (
              <div className="w-full max-w-[820px]">
                <SlidePage2 />
              </div>
            )}
            {activeTab === "3" && (
              <div className="w-full max-w-[820px]">
                <SlidePage3 />
              </div>
            )}
            {activeTab === "4" && (
              <div className="w-full max-w-[820px]">
                <SlidePage4 />
              </div>
            )}
          </div>
        ) : (
          /* Raw PDF Embedded Viewer */
          <div className="w-full max-w-5xl h-[85vh] bg-[#10141f] rounded-lg border border-zinc-800 overflow-hidden flex flex-col shadow-2xl">
            <div className="bg-[#141824] px-4 py-2 border-b border-zinc-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <FileText className="w-4 h-4 text-amber-500" />
                <span className="font-semibold">liivrr-thon-campaign-budget.pdf</span>
                <span className="text-[10px] text-zinc-500">(Updated Document)</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadUpdatedPdf}
                  className="px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded text-[11px] flex items-center gap-1 hover:from-amber-400 hover:to-orange-400"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Download Updated PDF</span>
                </button>
                <a
                  href={PDF_PRIMARY_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium"
                >
                  <span>Open raw</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="flex-1 w-full h-full bg-zinc-950">
              <object
                data={`${PDF_PRIMARY_PATH}#toolbar=1&navpanes=1&scrollbar=1`}
                type="application/pdf"
                className="w-full h-full border-none"
              >
                <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <FileText className="w-12 h-12 text-amber-500 mb-3" />
                  <p className="text-zinc-200 font-semibold mb-2">PDF Document Ready</p>
                  <p className="text-zinc-400 text-xs mb-4 max-w-md">
                    You can download the updated Pan-African PDF or view the interactive digital
                    deck.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleDownloadUpdatedPdf}
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-md text-xs flex items-center gap-2 hover:from-amber-400 hover:to-orange-400 transition-colors"
                    >
                      <Sparkles className="w-4 h-4" />
                      Download Updated Pan-Africa PDF
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("deck")}
                      className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-md text-xs transition-colors"
                    >
                      Switch to A4 Digital Deck
                    </button>
                  </div>
                </div>
              </object>
            </div>
          </div>
        )}
      </main>

      {/* Dedicated Off-Screen Render Target for PDF Generation: Always present so all 4 updated slides are captured */}
      <div
        className="fixed -left-[99999px] top-0 w-[820px] pointer-events-none opacity-100 flex flex-col gap-8"
        aria-hidden="true"
      >
        <SlidePage1 id="slide-page-1" />
        <SlidePage2 id="slide-page-2" />
        <SlidePage3 id="slide-page-3" />
        <SlidePage4 id="slide-page-4" />
      </div>

      {/* Dedicated Print Container: Always outputs all 4 pages seamlessly in print / Save as PDF */}
      <div className="only-print">
        <SlidePage1 />
        <SlidePage2 />
        <SlidePage3 />
        <SlidePage4 />
      </div>

      {/* Bottom Status / Summary Bar */}
      <footer className="no-print bg-[#090b10] border-t border-zinc-800/80 px-4 py-2.5 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              LIIVRR-THON Pan-African Virtual Campaign Budget · Total spend:{" "}
              <strong className="text-amber-400 font-mono">Up to $15,400 USD</strong> (~R277,200
              ZAR)
            </span>
          </div>
          <div className="flex items-center gap-4 text-zinc-500 text-[11px]">
            <span>A4 Portrait (4 Pages)</span>
            <span>Pan-Africa (Hub Examples: SA · Nigeria · Kenya · Mozambique)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
