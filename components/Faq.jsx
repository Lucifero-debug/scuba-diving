"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Can Non-Swimmers do scuba diving?",
    answer:
      "Frankly, there is no correlation between swimming and scuba diving. Swimming is the act of keeping ourselves above the water while scuba diving is done under the water; technically, we don't need to know how to swim. Scuba diving does not require the use of the arms, just the fins (feet).",
  },
  {
    question: "How much does scuba diving cost in Goa?",
    answer:
      "Scuba diving will cost you around ₹1,500/-. There are many packages available. The price depends on location, what it includes, and diving duration. Grande Island and Fort Island are the two famous places to do scuba.",
  },
  {
    question: "What do Scuba divers breathe?",
    answer:
      "This is a common misconception that scuba divers breathe 100% pure oxygen, but that's not at all true. Tanks are filled with compressed air that we breathe commonly.",
  },
  {
    question: "What is the minimum age for scuba diving?",
    answer:
      "The minimum age is 14 years for scuba diving with us, for complete safety purposes.",
  },
  {
    question: "Is scuba diving available in Goa?",
    answer:
      "Diving is conducted by PADI-certified scuba diving centers in Goa. You can explore underwater sea life the best way by opting for this package. Scuba diving places in India that offer Goa scuba diving packages are Malvan, Goa (Grande Island).",
  },
  {
    question: "Which beach is best for scuba diving in Goa?",
    answer:
      "Grande Island, also known by other names like Bat Island, Illa Grand, Grande Island is the best place for scuba diving in Goa.",
  },
  {
    question: "Is snorkeling a sport?",
    answer:
      "Snorkeling is the practice of swimming on or through a body of water while equipped with a diving mask, a shaped breathing tube called a snorkel, and usually swimfins. Snorkeling is a popular recreational activity, particularly at tropical resort locations.",
  },
  {
    question: "Which is the best beach in Goa for water sports?",
    answer: (
      <div>
        Calangute Beach. Goa has plenty to offer in terms of adventures and experiences, including water sports.
        <ul className="list-disc pl-5 mt-2">
          <li>Sinquerim Beach</li>
          <li>Baga Beach</li>
          <li>Dona Paula</li>
          <li>Anjuna Beach</li>
          <li>Majorda Beach</li>
          <li>Mobor Beach</li>
          <li>Colva Beach</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Is scuba diving an expensive water sport?",
    answer:
      "No, not at all. It is a very nominal cost watersport with the best excitement and adventure.",
  },
  {
    question: "Is scuba diving dangerous?",
    answer:
      "According to statistics, scuba diving is one of the safest sports if you keep yourself within the PADI guidelines taught to you.",
  },
  {
    question: "What is there to do in Goa in January?",
    answer:
      "Many parties at Baga, Candolim, Calangute, Anjuna, and the nightclubs throughout Goa. There are beach parties as well. Plenty of water sports activities to choose from, including scuba diving, snorkeling, and fishing. The beach shacks are all open, serving their food and drinks.",
  },
];

export default function FaqAccordion() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-5">
      <h2 className="text-5xl font-semibold mb-8 text-center">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              {typeof item.answer === "string" ? (
                <p>{item.answer}</p>
              ) : (
                item.answer
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
