// src/utils/auth.js

export function getTokenExpiry(token) {  // ← remove async
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000;
  } catch {
    return null;
  }
}

export function isTokenExpired(token) {
  const expiry = getTokenExpiry(token);  // now returns value not Promise
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

  const res = await fetch("/api/token/refresh/", {
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
  console.log("token:", token);

  if (isTokenExpired(token)) {
    token = await refreshAccessToken();
    if (!token) return null;
  }

  options.headers = {
    ...options.headers,
    "Content-Type": "application/json",
    ...(token && { "Authorization": `Bearer ${token}` }), // ← only attach if token exists
  };

  return fetch(url, options);
}