// src/utils/auth.js

const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:8000";

export function getTokenExpiry(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000;
  } catch {
    return null;
  }
}

export function isTokenExpired(token) {
  const expiry = getTokenExpiry(token);
  if (!expiry) return true;
  return Date.now() > expiry;
}

export async function refreshAccessToken() {
  const refresh = localStorage.getItem("refresh_token");

  if (!refresh || isTokenExpired(refresh)) {
    localStorage.clear();
    window.location.href = "/signin";
    return null;
  }

  const res = await fetch(`${API_BASE}/api/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });

  if (res.ok) {
    const data = await res.json();
    localStorage.setItem("access_token", data.access);
    return data.access;
  } else {
    localStorage.clear();
    window.location.href = "/signin";
    return null;
  }
}

export async function apiFetch(url, options = {}) {
  let token = localStorage.getItem("access_token");

  if (isTokenExpired(token)) {
    token = await refreshAccessToken();
    if (!token) return null;
  }

  options.headers = {
    ...options.headers,
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  return fetch(`${API_BASE}${url}`, options);
}
