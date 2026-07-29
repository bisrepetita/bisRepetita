const SUBJECT_LABELS = {
  "seance-essai": "Réserver une séance d'essai",
  "devis-prive": "Demande de devis — Coaching privé",
  "devis-duo-trio": "Demande de devis — Duo ou Trio",
  "devis-corporate": "Demande de devis — Programme corporate",
  renseignement: "Renseignement général",
  autre: "Autre",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body ?? {};
  const firstname = body.firstname?.trim();
  const lastname = body.lastname?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  // Honeypot: les bots remplissent ce champ caché, les humains ne le voient pas.
  if (body["bot-field"]) {
    return res.status(200).json({ ok: true });
  }

  if (!firstname || !lastname || !email || !message || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Champs requis manquants ou invalides." });
  }

  const subjectLabel = SUBJECT_LABELS[subject] ?? "Nouveau message";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Bis Repetita <contact@bisrepetita.ch>",
        to: ["contact@bisrepetita.ch"],
        reply_to: email,
        subject: `${subjectLabel} — ${firstname} ${lastname}`,
        html: `
          <p><strong>Nom :</strong> ${escapeHtml(firstname)} ${escapeHtml(lastname)}</p>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>
          <p><strong>Téléphone :</strong> ${phone ? escapeHtml(phone) : "—"}</p>
          <p><strong>Objet :</strong> ${escapeHtml(subjectLabel)}</p>
          <p><strong>Message :</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error("Resend error:", await response.text());
      return res.status(502).json({ error: "Échec de l'envoi de l'email." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Erreur serveur." });
  }
}
