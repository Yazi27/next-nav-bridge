// app/cards/page.tsx
import CardLink from "@/components/cardLink";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const cards = [
  { id: 1, title: "Project Alpha", color: "bg-blue-100" },
  { id: 2, title: "Project Beta", color: "bg-green-100" },
  { id: 3, title: "Project Gamma", color: "bg-amber-100" },
  { id: 4, title: "Project Delta", color: "bg-rose-100" },
];

export default function CardsPage() {
  return (
    <section className="container mx-auto p-6 md:p-10">
      <h1 className="text-2xl font-semibold mb-6">Your Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <CardLink key={card.id} href={`/cards/card/${card.id}`}>
            <Card className="h-full transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer">
              <div className={`h-2 w-full ${card.color}`} />
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-medium">{card.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Card #{card.id}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </CardLink>
        ))}
      </div>
    </section>
  );
}
