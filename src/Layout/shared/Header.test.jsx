// src/Header.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { I18nextProvider } from "react-i18next";
import i18n from "../../Features/Languages/i18n";

// Helper function to render Header with i18n context
const renderWithProviders = (ui) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {ui}
    </I18nextProvider>
  );
};

describe("Header Component", () => {
  it("renders search input with translated placeholder", () => {
    renderWithProviders(<Header />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });



  it("opens and displays language selection menu", () => {
    renderWithProviders(<Header />);
    const languageButton = screen.getByRole("button", { name: /language/i });
    
    // Click to open the language menu
    fireEvent.click(languageButton);
    const englishOption = screen.getByText(/english/i);
    const frenchOption = screen.getByText(/french/i);

    expect(englishOption).toBeInTheDocument();
    expect(frenchOption).toBeInTheDocument();
  });

  it("changes language on selecting a new language", () => {
    renderWithProviders(<Header />);
    const languageButton = screen.getByRole("button", { name: /language/i });

    // Open the language menu and select French
    fireEvent.click(languageButton);
    const frenchOption = screen.getByText(/french/i);
    fireEvent.click(frenchOption);

    // Check if the search input placeholder text changes to the French translation
    const searchInput = screen.getByPlaceholderText(/recherche/i);
    expect(searchInput).toBeInTheDocument();
  });
});
