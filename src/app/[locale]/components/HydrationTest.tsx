"use client";

import { useEffect, useState } from "react";

/**
 * Composant de test pour vérifier que l'hydratation fonctionne correctement
 * À supprimer une fois que tout fonctionne
 */
export default function HydrationTest() {
  const [isClient, setIsClient] = useState(false);
  const [hydrationStatus, setHydrationStatus] = useState<
    "pending" | "success" | "error"
  >("pending");

  useEffect(() => {
    setIsClient(true);
    setHydrationStatus("success");
  }, []);

  // Ne pas rendre pendant l'hydratation pour éviter les différences
  if (!isClient) {
    return (
      <div className="fixed top-4 left-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded z-50">
        <p className="text-sm">🔄 Hydratation en cours...</p>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50">
      <p className="text-sm">
        ✅ Hydratation réussie - Client: {isClient ? "Oui" : "Non"}
      </p>
    </div>
  );
}
