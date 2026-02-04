async function vote(category, nominee) {
  const res = await fetch("/api/vote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category, nominee })
  });

  const data = await res.json();

  if (!data.success) {
    alert(data.error);
    return;
  }

  document.body.innerHTML = `
    <div class="receipt">
      <h1>Vote Submitted</h1>
      <p><strong>Category:</strong> ${data.category}</p>
      <p><strong>Nominee:</strong> ${data.nominee}</p>
      <p><strong>Vote Code:</strong></p>
      <h2>${data.code}</h2>
      <p class="note">
        Screenshot this page and send it to the TUBG&PA team.
      </p>
      <p class="time">${new Date(data.timestamp).toLocaleString()}</p>
    </div>
  `;
}
