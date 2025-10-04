import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BarChart3, FileText, Bell, TrendingUp, Calculator, Users } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Dashboard Financiero",
    description: "Visualiza tus ganancias, pérdidas y tendencias con gráficos claros y reportes diarios, semanales y mensuales.",
    badge: "Tiempo Real"
  },
  {
    icon: TrendingUp,
    title: "Análisis de Reportes",
    description: "Identifica los reportes y da resumenes para tomar decisiones informadas que impulsen la rentabilidad de tu restaurante.",
    badge: "Optimización"
  },
  {
    icon: FileText,
    title: "Exportación a Excel",
    description: "Exporta todos tus reportes para compartir fácilmente con contadores, socios o para tu archivo personal.",
    badge: "Integración"
  },
  {
    icon: Users,
    title: "Ventas por Mesa",
    description: "Conoce en detalle qué se vende, dónde y en qué volumen para optimizar la distribución de tu restaurante.",
    badge: "Detallado"
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Recibe notificaciones cuando un producto esté por agotarse para evitar pérdidas por falta de stock.",
    badge: "Automático"
  },
  {
    icon: Calculator,
    title: "Control de Inventario",
    description: "Gestiona tu inventario de manera eficiente y reduce desperdicios con predicciones inteligentes.",
    badge: "Predictivo"
  }
];

export function Features() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Todo lo que necesitas para gestionar tu restaurante
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            FoodFlow integra todas las herramientas financieras que necesitas en una sola plataforma 
            intuitiva y fácil de usar, diseñada específicamente para restaurantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-gray-900 dark:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}