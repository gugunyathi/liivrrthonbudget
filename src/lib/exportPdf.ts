/**
 * Utility to generate and download an authentic A4 PDF from the rendered slide elements,
 * ensuring all Pan-African updates, exact typography, and tables are preserved.
 */
export async function generateUpdatedPdf(
  onProgress?: (step: string, percent: number) => void,
): Promise<Blob> {
  if (typeof window === "undefined") {
    throw new Error("PDF generation is only supported in browser environments.");
  }

  const { jsPDF } = await import("jspdf");
  const html2canvas = (await import("html2canvas")).default;

  const pageIds = ["slide-page-1", "slide-page-2", "slide-page-3", "slide-page-4"];
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  for (let i = 0; i < pageIds.length; i++) {
    const pageId = pageIds[i];
    if (!pageId) continue;
    const element = document.getElementById(pageId);
    if (!element) {
      throw new Error(`Slide element with id '${pageId}' could not be found.`);
    }

    onProgress?.(`Rendering Page ${i + 1} of 4...`, Math.round(((i + 0.5) / pageIds.length) * 100));

    // Capture at high resolution (scale: 2 for sharp retina quality)
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#0b0d13",
      logging: false,
      windowWidth: 1200,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.95);

    if (i > 0) {
      pdf.addPage("a4", "portrait");
    }

    // A4 dimensions in mm: 210 x 297
    pdf.addImage(imgData, "JPEG", 0, 0, 210, 297, undefined, "FAST");
    onProgress?.(`Completed Page ${i + 1} of 4`, Math.round(((i + 1) / pageIds.length) * 100));
  }

  // Set PDF document properties
  pdf.setProperties({
    title: "LIIVRR-THON: Campaign Budget (Pan-Africa)",
    subject: "A 4–5 week Pan-African virtual sprint campaign & operational budget",
    author: "LIIVRR-THON",
    keywords: "pan-africa, hackathon, budget, liivrr, sprint",
    creator: "LIIVRR Deck Engine",
  });

  return pdf.output("blob");
}
