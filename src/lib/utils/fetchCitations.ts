export const fetchCitations = async (url: string) => {
  const publications: any[] = [];
  try {
    // Fetch the RSS feed
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    );
    const data = await response.json();
    // Parse the RSS feed
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/html");

    // Extract publication details
    const items = xml.querySelectorAll("tbody tr");

    items.forEach((item) => {
      // Extract title, journal, year, and citations from each row
      const titleElement = item.querySelector(".gsc_a_at"); // Title selector
      const journalElement = item.querySelectorAll(".gs_gray"); // Journal and year selector
      const citationsElement = item.querySelector(".gsc_a_ac"); // Citations selector
      if (titleElement && journalElement && citationsElement) {
        const title = titleElement.textContent?.trim();
        const journalText =
          journalElement[journalElement.length - 1].textContent?.trim() ?? "";
        const citations =
          parseInt(citationsElement.textContent?.trim() ?? "0", 10) || 0;

        // Add publication to the list
        publications.push({
          title,
          journal: journalText,
          citations,
        });
      }
    });
  } catch (error) {
    console.error("Error fetching citations:", error);
  }
  return publications;
};
