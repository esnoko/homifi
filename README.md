# Homifi Expo App

Homifi is a modern real estate mobile app built with [Expo](https://expo.dev), [React Native](https://reactnative.dev/), and [Appwrite](https://appwrite.io/) as the backend. The app allows users to browse, search, and book properties, view property details, and manage their profile. It features Google authentication, dynamic property filtering, and a clean, responsive UI using [Tailwind CSS](https://tailwindcss.com/) via [NativeWind](https://www.nativewind.dev/).

---

## Features

- **Google Authentication:** Secure login using Google OAuth.
- **Property Listings:** Browse, search, and filter properties by type or keyword.
- **Property Details:** View detailed information, images, facilities, agent info, and reviews for each property.
- **Profile Management:** View and manage user profile, bookings, and settings.
- **Responsive UI:** Built with NativeWind (Tailwind CSS for React Native) for consistent styling.
- **Appwrite Backend:** All data (users, properties, reviews, galleries, agents) is managed via Appwrite.
- **TypeScript:** Full type safety across the codebase.
- **File-based Routing:** Uses Expo Router for scalable navigation.

---

## Project Structure

- **/app**: Main app screens and navigation (file-based routing).
- **/components**: Reusable UI components (Cards, Filters, Search, etc).
- **/constants**: Static data, icons, and images.
- **/lib**: Appwrite integration, global context, and custom hooks.
- **/assets**: Fonts, images, and icons.

---

## How It Works

- On launch, users are greeted with an onboarding screen and can log in with Google.
- The home screen shows featured properties and recommendations, with search and filter options.
- Users can view detailed property pages, including agent info, facilities, gallery, and reviews.
- The profile tab allows users to view and edit their profile, see bookings, and log out.
- All data is fetched and managed via Appwrite, with custom hooks for API calls and global state.

---

## Technologies Used

- **Expo & React Native**: Cross-platform mobile development.
- **Appwrite**: Backend-as-a-Service for authentication and data.
- **NativeWind**: Tailwind CSS for React Native.
- **TypeScript**: Type safety and better developer experience.
- **Expo Router**: File-based navigation.
- **Jest**: Testing (setup for future tests).

---

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**

   Create a `.env.local` file with your Appwrite credentials:
   ```
   EXPO_PUBLIC_APPWRITE_ENDPOINT=...
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=...
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=...
   EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=...
   EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=...
   EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=...
   EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=...
   ```

3. **Start the app**
   ```bash
   npx expo start
   ```

   Open in Expo Go, Android/iOS simulator, or web.

---

## Why This Project?

This project demonstrates:

- Real-world use of Expo, React Native, and Appwrite.
- Scalable architecture with modular components and hooks.
- Clean, maintainable code with TypeScript and Tailwind CSS.
- Modern mobile UX patterns and authentication flows.

---

## Contact

If you have questions or want to discuss the project, feel free to reach out!
