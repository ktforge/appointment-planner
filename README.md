# Appointment Planner

This is a small React app I built for the Appointment Planner challenge project on Codecademy's Full-Stack Engineer path. It has two pages: one for adding contacts and one for adding appointments with those contacts.

Live site: https://ktforge.github.io/appointment-planner/

## What it does

- Add a contact with a name, phone number, and email
- Warns you in the heading if the name already exists and won't add it twice
- Checks the phone number against a US format (937-555-1234, (937) 555-1234, 937.555.1234, or 9375551234)
- Add an appointment with a name, a contact picked from a dropdown, a date, and a time
- Won't let you pick a date before today
- Lists every contact and appointment under its form

Everything is kept in React state, so the lists reset when you refresh the page.

## How it's put together

`App` holds the contacts and appointments arrays and the functions that add to them. `ContactsPage` and `AppointmentsPage` each keep track of what's typed in their form and pass it down to `ContactForm` and `AppointmentForm`, which just render the inputs. `TileList` and `Tile` are shared by both pages: `TileList` pulls `name` out of each object for the title and sends everything else to `Tile` as the description lines.

## What I learned

The duplicate check was a good use of `useEffect`. It reruns whenever the typed name or the contacts list changes, so the warning shows up while you're still typing.

My phone `pattern` regex needed the `-` inside the brackets escaped (`[\-. ]`). Newer browsers read `pattern` in a stricter regex mode, and an unescaped dash there can break the whole check.

My contact and appointment titles weren't showing up bold. The starter CSS styles `.tile.tile-title`, which needs both classes on the same element, and I only had `tile-title` on it. Adding `tile` fixed it.

The starter was set up with Create React App, which is deprecated now, so I moved it over to Vite. Getting it running on GitHub Pages meant telling React Router about the `/appointment-planner/` base path, and copying `index.html` to `404.html` in the deploy so refreshing on `/contacts` or `/appointments` doesn't give a 404.

## Running it

```
npm install
npm run dev
```

Then open the local address Vite prints (usually http://localhost:5173/appointment-planner/).

Example: add Chris, 937-555-1234, chris@test.com on the Contacts page. On the Appointments page, pick Chris, add "Camera check" for 2026-11-02 at 14:30, and this tile shows up:

```
Camera check
Chris
2026-11-02
14:30
```

Built by DeVante Bush
