Scaffold a new JakartaOne event for the given year and optional language.

Arguments: $ARGUMENTS

Parse the arguments as `YEAR [LANG]` where LANG defaults to `en` if omitted.
If any required information is missing, ask the user before proceeding.

Supported languages and their data paths:
- `en`  → `data/en/YEAR/default/`
- `jp`  → `data/jp/YEAR/japan/`
- `zh`  → `data/zh/YEAR/chinese/`

---

## Step 1 — Gather event details

Ask the user for the following if not already provided:
- **Event date** — the public-facing date string (e.g. "2 December 2027")
- **Registration URL** — the Luma or external link for the Register Now button (can be left as `#` if not yet known)

---

## Step 2 — Scaffold content files (en only)

For `en`, run:
```
hugo new --kind event YEAR
```

This creates:
- `content/YEAR/_index.html`
- `content/YEAR/speakers.md`
- `content/YEAR/program-committee.md`

For `jp` and `zh`, skip this step — those regional sub-events have their own existing content structure.

---

## Step 3 — Edit the generated content files (en only)

After `hugo new` runs, edit `content/YEAR/_index.html` to replace every placeholder:

| Placeholder | Replace with |
|---|---|
| `DD Month YEAR` | the event date string (e.g. `2 December 2027`) |
| `href="#"` in tagline_suffix | the registration URL |

The `seo_title` and `tagline` fields both contain `DD Month YEAR` — update both.

Do not touch `speakers.md` or `program-committee.md`; they have no date placeholders.

---

## Step 4 — Create data stubs

Create the data directory and the following stub files. Do NOT add placeholder data.

**speakers.yml**
```yaml
items: []
```

**committee.yml**
```yaml
items: []
```

**agenda.yml**
```yaml
timezone: EST
complete: false
types:
  - name: "Keynote"
    id: "keynote"
    color: "#F6B26B"
  - name: "Session"
    id: "session"
    color: "#4A86E8"
  - name: "Studio Jakarta EE"
    id: "studio"
    color: "#B7B7B7"
items: []
```

**registration.yml** — set `end_date` to the day after the event date at midnight EST:
```yaml
title: "About The Event"
end_date: YYYY-MM-DDT00:00:00-05:00
end_text: "Thank you for making the JakartaOne Livestream event a success!"
links: []
```

**hosts.yml** (en only):
```yaml
items: []
```

---

## Step 5 — Report

List every file created or modified and remind the user to remove `draft: true` when ready to publish.
