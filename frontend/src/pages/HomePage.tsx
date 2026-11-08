import { CalendarDays, ChartNoAxesCombined, Clock3, UsersRound } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import "../components/layout/Navbar.css";

const features = [
    {
        icon: CalendarDays,
        title: "Grafik bez chaosu",
        description: "Twórz przejrzyste grafiki w kilka chwil i miej każdy dyżur pod kontrolą.",
    },
    {
        icon: UsersRound,
        title: "Zespół w jednym miejscu",
        description: "Zarządzaj dostępnością, rolami i zmianami bez niekończących się wiadomości.",
    },
    {
        icon: Clock3,
        title: "Mniej ręcznej pracy",
        description: "Porządkuj powtarzalne zadania i odzyskaj czas na prowadzenie zespołu.",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Decyzje oparte na danych",
        description: "Wkrótce: raporty, które pomogą zobaczyć więcej niż tylko tabelę zmian.",
    },
];

export default function HomePage() {
    return (
        <div className="home-page">
            <Navbar />
            <main>
                <section className="hero section" id="start" aria-labelledby="hero-title">
                    <div className="hero__content">
                        <p className="eyebrow">Comord dla nowoczesnych zespołów</p>
                        <h1 id="hero-title">Dobry grafik. Spokojniejszy dzień.</h1>
                        <p className="hero__description">
                            Comord pomaga układać pracę zespołu prosto, szybko i bez zbędnego chaosu.
                        </p>
                        <a className="button button--primary" href="#funkcje">
                            Poznaj funkcje
                        </a>
                    </div>
                </section>

                <section className="features section" id="funkcje" aria-labelledby="features-title">
                    <div className="section-heading">
                        <p className="eyebrow">Wszystko na swoim miejscu</p>
                        <h2 id="features-title">Zespół działa lepiej, gdy plan jest prosty.</h2>
                        <p>Comord zbiera najważniejsze elementy codziennej organizacji w jednym spokojnym miejscu.</p>
                    </div>
                    <div className="features__grid">
                        {features.map(({ icon: Icon, title, description }) => (
                            <article className="feature-card" key={title}>
                                <div className="feature-card__icon" aria-hidden="true">
                                    <Icon size={24} strokeWidth={1.8} />
                                </div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="placeholder-section section" id="tutorial" aria-labelledby="tutorial-title">
                    <p className="eyebrow">Wkrótce</p>
                    <h2 id="tutorial-title">Tutorial</h2>
                    <p>Krótki przewodnik po Comord jest już w przygotowaniu.</p>
                </section>

                <section className="placeholder-section section" id="faq" aria-labelledby="faq-title">
                    <p className="eyebrow">Wkrótce</p>
                    <h2 id="faq-title">Najczęściej zadawane pytania</h2>
                    <p>Odpowiedzi pojawią się tutaj wraz z kolejnymi funkcjami.</p>
                </section>
            </main>
        </div>
    );
}
