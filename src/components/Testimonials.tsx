import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "María González",
    role: "Propietaria de Restaurante Don Carlos",
    content: "FoodFlow cambió completamente la manera en que gestiono las finanzas de mi restaurante. Ahora puedo ver exactamente qué platos me generan más ganancias y cuáles necesito ajustar.",
    rating: 5,
    avatar: "MG"
  },
  {
    name: "Roberto Jiménez",
    role: "Dueño de Pizzería La Familia",
    content: "Las alertas de inventario me han ahorrado miles de colones en compras innecesarias. Ya no tengo ingredientes vencidos ni me quedo sin stock en horas pico.",
    rating: 5,
    avatar: "RJ"
  },
  {
    name: "Ana Morales",
    role: "Gerente de Café Central",
    content: "Los reportes automáticos y la exportación a Excel hacen que compartir información con mi contador sea súper fácil. FoodFlow es indispensable para mi negocio.",
    rating: 5,
    avatar: "AM"
  }
];

export function Testimonials() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Descubre cómo FoodFlow está transformando restaurantes en toda Latinoamérica
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb3duZXIlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc1OTYwNTc5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Propietario de restaurante usando FoodFlow"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}