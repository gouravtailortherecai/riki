"use client";

import { withAuthenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { ThemeProvider, Theme } from "@aws-amplify/ui-react";

const myTheme: Theme = {
  name: "my-theme",
  tokens: {
    colors: {
      brand: {
        primary: { value: "#2563eb" }, // Tailwind blue-600
        secondary: { value: "#1e293b" }, // slate-800
      },
    },
    radii: {
      small: { value: "8px" },
      medium: { value: "12px" },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: "{colors.brand.primary}" },
          _hover: { backgroundColor: { value: "#1d4ed8" } }, // darker blue
        },
      },
    },
  },
};

function Home({ signOut, user }: WithAuthenticatorProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome {user?.username}
          </h1>
          <button
            onClick={signOut}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Sign out
          </button>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default withAuthenticator(Home);
