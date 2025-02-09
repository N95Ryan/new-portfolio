import { NextResponse } from "next/server";

export function middleware(req : any) {
  const { pathname } = req.nextUrl;

  // Si l'URL est simplement "/", redirige vers "/fr"
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/fr"; // Redirige vers le français par défaut
    return NextResponse.redirect(url);
  }

  // Si l'URL contient "/fr", redirige vers la version française
  if (pathname === "/fr") {
    return NextResponse.next(); // Rien à faire si la langue est déjà "fr"
  }

  // Si l'URL contient "/en", redirige vers la version anglaise
  if (pathname === "/en") {
    return NextResponse.next(); // Rien à faire si la langue est déjà "en"
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/fr", "/en"], // Ce middleware s'applique sur les routes "/fr", "/en" et "/"
};
