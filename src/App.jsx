import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  // both lists live here so either page can use them
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // adds a new contact to the end of the list
  const addContact = (name, phone, email) => {
    setContacts((prev) => [...prev, { name, phone, email }]);
  };

  // adds a new appointment to the end of the list
  const addAppointment = (name, contact, date, time) => {
    setAppointments((prev) => [...prev, { name, contact, date, time }]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} addContact={addContact} />}
        />
        {/* appointments page needs contacts too, for the contact picker */}
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            />
          }
        />
      </Route>,
    ),
    // the site lives under /appointment-planner/ on github pages, so the routes start there
    { basename: import.meta.env.BASE_URL },
  );

  return <RouterProvider router={router} />;
}

export default App;
