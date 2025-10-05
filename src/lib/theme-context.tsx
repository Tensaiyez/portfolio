"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Function to get time-based theme
  const getTimeBasedTheme = (): Theme => {
    const hour = new Date().getHours();
    // Dark mode from 7 PM (19:00) to 7 AM (07:00)
    return hour >= 19 || hour < 7 ? "dark" : "light";
  };

  useEffect(() => {
    setMounted(true);
    
    // Always use time-based theme
    setTheme(getTimeBasedTheme());
  }, []);

  useEffect(() => {
    if (mounted) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme, mounted]);

  // Update theme based on time automatically
  useEffect(() => {
    if (!mounted) return;

    const updateThemeByTime = () => {
      const timeBasedTheme = getTimeBasedTheme();
      setTheme(timeBasedTheme);
    };

    // Update immediately
    updateThemeByTime();

    // Set up interval to check every minute
    const interval = setInterval(updateThemeByTime, 60000);

    return () => clearInterval(interval);
  }, [mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values during SSR or if not within provider
    return {
      theme: "light" as Theme,
      toggleTheme: () => {},
    };
  }
  return context;
}
