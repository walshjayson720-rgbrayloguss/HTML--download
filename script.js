async function downloadHTML() {
  const url = document.getElementById("urlInput").value;
  const status = document.getElementById("status");

  if (!url) {
    status.textContent = "Please enter a URL.";
    return;
  }

  status.textContent = "Fetching HTML...";

  try {
    const response = await fetch("YOUR_BACKEND_URL_HERE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });

    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    const blob = await response.blob();
    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "page.html";
    a.click();

    status.textContent = "Download started!";
  } catch (error) {
    status.textContent = "Error fetching page.";
  }
}
