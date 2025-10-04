import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BarChart3, TrendingUp, Clock } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Inteligencia Financiera para Restaurantes</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Controla las finanzas de tu restaurante con{" "}
                <span className="text-blue-600 dark:text-blue-400">FoodFlow</span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                La plataforma de gestión financiera diseñada específicamente para restaurantes. 
                Monitorea tus ganancias, optimiza tu menú y toma decisiones estratégicas con datos en tiempo real.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
                Comenzar Gratis
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg">
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Reportes en tiempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Configuración en 5 minutos</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697206165469-9227e6e3aa0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1OTYwNTc5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dashboard de analytics para restaurantes"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">+23%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Ganancias este mes</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">₡47,250</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Ventas de hoy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}