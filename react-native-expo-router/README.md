# React Native Expo Router

A React Native project built with [Expo](https://expo.dev) and [Expo Router](https://expo.github.io/router) that demonstrates file-based routing, navigation patterns, and dynamic routes.

## Tech Stack

- **React Native** 0.83.6
- **Expo** ~55.0
- **Expo Router** ~55.0 — file-based routing
- **React Navigation** — Drawer, Bottom Tabs, Stack navigators
- **React** 19.2.0
- **TypeScript** ~5.9

## Project Structure

```
src/app/
├── _layout.tsx              # Root layout (Stack navigator)
├── (drawer)/                # Drawer navigation group
│   ├── _layout.tsx          # Drawer layout with Home, About, Details screens
│   ├── index.tsx            # Home screen
│   ├── about.tsx            # About screen
│   └── details.tsx          # Details screen
├── profile/
│   ├── index.tsx            # Profile screen
│   └── details.tsx          # Profile details screen
├── [id].tsx                 # Dynamic route — /123, /456, etc.
├── docs/
│   └── [...slug].tsx        # Catch-all route — /docs/a/b/c
├── about.tsx
└── details.tsx
```

## Navigation

The app uses a **Stack + Drawer** navigation pattern:

- The root `_layout.tsx` wraps a Stack navigator
- The `(drawer)` group uses a Drawer navigator with three screens:
  - **Home** — links to dynamic and nested routes
  - **About**
  - **Details**

The codebase also includes commented-out examples for:
- **Bottom Tabs** navigation (standard and custom tab bar)
- **Native Tabs** navigation via `expo-router/unstable-native-tabs`

## Routing Features Demonstrated

| Feature | Example Route |
|---|---|
| Static routes | `/about`, `/details` |
| Drawer group | `/(drawer)/` |
| Dynamic segment | `/[id]` → `/123` |
| Nested routes | `/profile`, `/profile/details` |
| Catch-all segment | `/docs/[...slug]` → `/docs/a/b/c` |

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

   Then open in:
   - [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [Expo Go](https://expo.dev/go)
   - Web browser

3. Run on a specific platform directly

   ```bash
   npm run ios
   npm run android
   npm run web
   ```

## Other Commands

| Command | Description |
|---|---|
| `npm run lint` | Run ESLint via Expo |
| `npm run reset-project` | Move starter code to `app-example/` and start fresh |

## Learn More

- [Expo Router docs](https://expo.github.io/router) — File-based routing for React Native
- [Expo documentation](https://docs.expo.dev/) — Fundamentals and advanced guides
- [React Navigation](https://reactnavigation.org/) — Drawer, Stack, and Tab navigators
