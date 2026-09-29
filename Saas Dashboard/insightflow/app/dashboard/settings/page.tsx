"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("Sahaya Jefrin");
  const [email, setEmail] = useState("sahaya@example.com");
  const [phone, setPhone] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <main className="p-4  sm:p-6 lg:p-8">

      {/* Header */}
      <h1 className="text-1xl text-green-600 font-bold sm:text-2xl">
        Settings
      </h1>

      <p className="mt-2 text-green-700">
        Manage your account settings.
      </p>

      {/* Success Message */}
      {saved && (
        <div className="mt-6 rounded-full border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ Your settings have been saved successfully.
        </div>
      )}

      {/* Profile Information */}
      <div className="mt-8 max-w-2xl rounded-xl  bg-white p-6 shadow-md">

        <h2 className="text-lg text-green-600 font-semibold">
         My Profile 
        </h2>

        <div className="mt-6 space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-green-700">
              Enter your Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-full border border-green-500 px-4 py-2 outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-green-700">
              Enter your Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-full border border-green-500 px-4 py-2 outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Phone Number */}
 <div>
            <label className="text-sm font-medium text-green-700">
              Enter your Phone Number
            </label>

            <input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full rounded-full border border-green-500 px-4 py-2 outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>


          {/* Save */}
          <button
            type="button"
            onClick={handleSave}
            className="rounded-full bg-green-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-500"
          >
            Save Changes
          </button>

        </div>
      </div>

      {/* Notifications */}
      <div className="mt-6 max-w-2xl rounded-xl  bg-white p-6 shadow-md">

        <h2 className="text-lg font-semibold text-green-600">
          Notifications
        </h2>

        <div className="mt-5 flex items-center justify-between gap-4">

          <div>
            <p className="font-medium text-green-700">
              Email Notifications
            </p>

            <p className="text-sm text-green-700">
              Receive important account updates.
            </p>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            className="h-5 w-5"
          />

        </div>

      </div>

    </main>
  );
}