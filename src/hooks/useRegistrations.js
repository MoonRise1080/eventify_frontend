import { useEffect, useState } from "react";

const LS_KEY = "eventify.registrations";

export function useRegistrations() {
  // Load from localStorage
  const [ids, setIds] = useState(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Persist on change
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(ids));
  }, [ids]);

  const isRegistered = (id) => ids.includes(String(id));

  const register = (id) =>
    setIds((prev) => (prev.includes(String(id)) ? prev : [...prev, String(id)]));

  const unregister = (id) =>
    setIds((prev) => prev.filter((x) => x !== String(id)));

  return { ids, isRegistered, register, unregister };
}
