# Stopwatch with Lap Table

![App Screenshot](path_to_screenshot.png)

## Project Description

The project is a stopwatch application that allows tracking lap times. It contains two timers: one for the total time and another for the current lap time. Additionally, it includes a lap table that displays the time for each lap. The user can start, stop, reset the stopwatch, and add new laps.

### Main Features:
- **Start**: Starts the countdown for both timers.
- **Stop**: Stops the countdown and displays a summary.
- **Reset**: Resets the timers to zero and clears the lap table.
- **Lap**: Adds a new lap and displays its time in the results table.

## Architecture

The application consists of several components, including:
- Generic counter component
- Total time counter component
- Lap time counter component
- Button components in various variants (e.g., main Start, Stop button, etc.)
- Lap table
- Single lap entry in the table
- Summary component

Communication within the app is local, with no need to connect to a backend.

## Tech Stack

| Technologies       | Description                                         |
|--------------------|-----------------------------------------------------|
| React              | Main JavaScript library for building the user interface |
| TypeScript         | Static typing for JavaScript                        |
| Styled Components  | Styling components in the application               |
| React Scripts      | Tools for creating React applications               |
| Jest               | Application testing                                 |

## Local Development

To run the application locally, follow these steps:

1. Ensure you have Node.js v20.* installed.
2. Clone the repository:

# Application Scripts

| Script         | Description                                                        |
|----------------|--------------------------------------------------------------------|
| `dev`          | Runs the application locally                                       |
| `build`        | Builds the application for production                              |
| `lint`         | Checks the code for errors and inconsistencies (eslint)            |
| `lint-fix`     | Automatically fixes detected issues (eslint)                       |
| `preview`      | Runs the application after building                                |
| `prettier`     | Formats the code according to Prettier settings                     |
| `prepare`      | Prepares scripts for Husky (git hooks)                             |

## Live Link

The application is available online at this link.

## Access

If the application requires login, use the following test credentials:

- **Login**: user@gmail.com
- **Password**: SomeStrongPassword123!@

## Completed Features

- Implementation of two timers: total time and lap time.
- Implementation of Start, Stop, Reset, Lap buttons.
- Lap table displaying lap numbers and times.
- Components for the timer, buttons, table, and summary.
- The application works according to React StrictMode guidelines.

## Future Plans

- Adding an option to export lap results to a file (e.g., CSV).
- The ability to save lap records in local storage or a database.
- UI optimization for mobile devices.

## Contact the Author

- [LinkedIn](https://www.linkedin.com)
- **Email**: example@example.com



# Stoper z tabelą okrążeń

![App Screenshot](ścieżka_do_zrzutu_ekranu.png)

## Opis projektu

Projekt jest aplikacją typu stoper, która umożliwia śledzenie czasu okrążeń. Zawiera dwa liczniki: jeden dla całkowitego czasu, a drugi dla czasu aktualnego okrążenia. Dodatkowo zawiera tabelę okrążeń, która wyświetla czas każdego okrążenia. Użytkownik może rozpocząć, zatrzymać, zresetować stoper oraz dodać nowe okrążenia.

### Główne funkcje:
- Start: Rozpoczyna odliczanie czasu w obu licznikach.
- Stop: Zatrzymuje odliczanie i wyświetla podsumowanie.
- Reset: Resetuje liczniki do zera i kasuje tabelę okrążeń.
- Lap: Dodaje nowe okrążenie i wyświetla jego czas w tabeli wyników.

## Architektura

Aplikacja składa się z kilku komponentów, w tym:
- Generyczny komponent licznika
- Komponent licznika całkowitego czasu
- Komponent licznika czasu okrążenia
- Komponent przycisków w różnych wariantach (np. główny przycisk Start, Stop, itp.)
- Tabela okrążeń
- Pojedynczy wpis w tabeli okrążeń
- Komponent podsumowania

Komunikacja w aplikacji jest lokalna, bez potrzeby łączenia z backendem.

## Tech stack

| Technologie       | Opis                              |
|-------------------|-----------------------------------|
| React             | Główna biblioteka JavaScript do budowy interfejsu użytkownika |
| TypeScript        | Statyczne typowanie dla JavaScript |
| Styled Components | Stylowanie komponentów w aplikacji |
| React Scripts     | Narzędzia do tworzenia aplikacji w React |
| Jest              | Testowanie aplikacji              |

## Local development

Aby uruchomić aplikację lokalnie, postępuj zgodnie z poniższymi krokami:

1. Upewnij się, że masz zainstalowaną wersję Node.js v20.*
2. Sklonuj repozytorium:
# Skrypty w aplikacji

| Skrypt        | Opis                                                           |
|---------------|----------------------------------------------------------------|
| `dev`         | Uruchamia aplikację lokalnie                                   |
| `build`       | Buduje aplikację do produkcji                                  |
| `lint`        | Sprawdza kod pod kątem błędów i niespójności (eslint)            |
| `lint-fix`    | Naprawia automatycznie wykryte problemy (eslint)                |
| `preview`     | Uruchamia aplikację po jej zbudowaniu                          |
| `prettier`    | Formatuje kod zgodnie z ustawieniami Prettiera                  |
| `prepare`     | Przygotowuje skrypty do działania Husky (git hooks)             |

## Link do live

Aplikacja jest dostępna online pod tym linkiem.

## Dostępy

Jeśli aplikacja wymaga logowania, użyj poniższych danych logowania testowego:

- **Login**: user@gmail.com
- **Hasło**: SomeStrongPassword123!@

## Co zostało zrobione?

- Implementacja dwóch liczników: całkowitego czasu oraz czasu okrążenia.
- Implementacja przycisków Start, Stop, Reset, Lap.
- Tabela okrążeń wyświetlająca numery okrążeń i czasy.
- Komponenty do licznika, przycisków, tabeli i podsumowania.
- Aplikacja działa zgodnie z zasadami React StrictMode.

## Plany na przyszłość

- Dodanie opcji eksportowania wyników okrążeń do pliku (np. CSV).
- Możliwość zapisywania rekordów okrążeń w lokalnym magazynie lub bazie danych.
- Optymalizacja interfejsu użytkownika dla urządzeń mobilnych.

## Kontakt do autora

- [LinkedIn](https://www.linkedin.com)
- **Email**: example@example.com

