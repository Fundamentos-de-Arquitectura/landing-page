import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  "Configuración gratuita en 5 minutos",
  "Sin compromiso, cancela cuando quieras",
  "Soporte técnico en español",
  "Actualizaciones automáticas incluidas"
];

export function CTA() {
  return (
    <div className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Comienza a optimizar las finanzas de tu restaurante hoy
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Únete a cientos de restaurantes que ya están mejorando su rentabilidad 
                con FoodFlow. Prueba gratis por 30 días, sin tarjeta de crédito.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-white">
                    <div className="text-sm opacity-90">Comienza tu prueba gratuita</div>
                    <div className="font-medium">Ingresa tu email para empezar</div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Input 
                      type="email" 
                      placeholder="tu@email.com" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                    />
                    <Button className="bg-white text-blue-600 hover:bg-gray-100 flex-shrink-0">
                      Empezar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="text-xs text-blue-100 opacity-80">
                    Al registrarte, aceptas nuestros términos de servicio y política de privacidad.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1583744516579-9672cdf19420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYnVzaW5lc3MlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTYwNTc5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tecnología para restaurantes FoodFlow"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}