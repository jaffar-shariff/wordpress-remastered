import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Jonathan Chowles",
    review: "Jaffar was fantastic, very helpful, and knew how to walk me through the process, explaining everything he did. Each time I reached out via chat support, the response was prompt, kind, and very knowledgeable about solving my issue. Very pleased with Domain.com and their support team.",
    rating: 5,
    link: "https://www.trustpilot.com/users/66765c015f04c55730c2cffb"
  },
  {
    name: "Eleftherios Rigas",
    review: "Jaffar was nothing short of spectacular! He was very kind, helpful, personable, and knowledgeable in his field! He was able to resolve all technical issues, and was exceptionally diligent in his craft. This was the best experience that I have had thus far.",
    rating: 5,
    link: "https://www.trustpilot.com/users/6695ab4f776b864354c14d72"
  },
  {
    name: "Kaylie Bellas",
    review: "Had the pleasure of working with Jaffar today at Domain.com and I couldn't have had a better experience. I've talked to a few support people from Domain.com and they said they couldn't help me but Jaffar did and he fixed it all simply. His knowledge and how fast he was - I really appreciate the assistance. 5 stars",
    rating: 5,
    link: "https://www.trustpilot.com/review/www.domain.com?search=jaffar&stars=5"
  },
  {
    name: "Sam",
    review: "Got some help from Jaffar, great help. He listened, he understood the issue, didn't just reply with standard copy/paste replies and he sorted the issue all while being nice and friendly at the same time. Take a lesson from this customer service rep!",
    rating: 5,
    link: "https://www.trustpilot.com/reviews/6673f36a94f8fb474cfd4991"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => (
  <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-float transition-all duration-300 hover:scale-105 group h-full flex flex-col">
    <div className="flex-1 space-y-6">
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      {/* Review */}
      <blockquote className="text-muted-foreground leading-relaxed italic">
        "{testimonial.review}"
      </blockquote>
    </div>
    
    {/* Author & Link */}
    <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
      <div>
        <h4 className="font-semibold text-primary">
          {testimonial.name}
        </h4>
        <p className="text-sm text-muted-foreground">Verified Client</p>
      </div>
      <Button variant="ghost" size="sm" asChild>
        <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  </Card>
);

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from satisfied clients who experienced exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trustpilot CTA */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-float transition-all duration-300 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-gradient-accent rounded-xl flex items-center justify-center text-4xl mx-auto">
                ⭐
              </div>
              <h3 className="text-2xl font-bold text-accent">See More Reviews</h3>
              <p className="text-muted-foreground">
                Check out all our 5-star reviews on Trustpilot and see why clients choose our services
              </p>
              <Button variant="glow" size="lg" className="group" asChild>
                <a href="https://www.trustpilot.com/review/www.domain.com?search=jaffar&stars=5" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View on Trustpilot
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};