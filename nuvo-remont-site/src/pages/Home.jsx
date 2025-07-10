import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Phone, Hammer, Paintbrush, Home as HomeIcon, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gray-100 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Nuvo Remont</h1>
        <p className="text-xl md:text-2xl mb-6">Nowoczesne wykończenia wnętrz w Warszawie</p>
        <Button className="text-lg px-6 py-4">Zamów bezpłatną wycenę</Button>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Nasze usługi</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <Card>
            <CardContent className="text-center">
              <HomeIcon className="w-10 h-10 mx-auto mb-4 text-sky-600" />
              <h3 className="font-bold text-xl mb-2">Remonty mieszkań</h3>
              <p>Kompleksowe prace remontowe – od A do Z. Wysoka jakość i terminowość.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <Hammer className="w-10 h-10 mx-auto mb-4 text-sky-600" />
              <h3 className="font-bold text-xl mb-2">Łazienki pod klucz</h3>
              <p>Projekt, instalacja i wykończenie. Funkcjonalność i styl w jednym.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <Paintbrush className="w-10 h-10 mx-auto mb-4 text-sky-600" />
              <h3 className="font-bold text-xl mb-2">Malowanie i gładzie</h3>
              <p>Precyzyjne wykończenia ścian i sufitów. Gładko i estetycznie.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Kontakt</h2>
        <p className="text-lg mb-4">Masz pytania? Chcesz wycenę?</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <Phone className="text-sky-600" />
          <span className="text-xl font-medium">+48 123 456 789</span>
          <a
            href="https://wa.me/48123456789"
            className="text-sky-700 underline hover:text-sky-900"
          >Napisz na WhatsApp</a>
        </div>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Imię i nazwisko" className="border p-3 rounded-xl" />
          <input type="email" placeholder="Adres e-mail" className="border p-3 rounded-xl" />
          <textarea placeholder="Twoja wiadomość" rows={4} className="border p-3 rounded-xl" />
          <Button className="w-full text-lg">Wyślij wiadomość</Button>
        </form>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Nuvo Remont – Wszystkie prawa zastrzeżone.
      </footer>
    </main>
  );
}