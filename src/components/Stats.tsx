import { TrendingUp, DollarSign, Clock, Target } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "30%",
    label: "Reducción en pérdidas",
    description: "Promedio de mejora en eficiencia financiera"
  },
  {
    icon: DollarSign,
    value: "₡250K+",
    label: "Ahorros mensuales",
    description: "Por optimización de inventario y menú"
  },
  {
    icon: Clock,
    value: "5 min",
    label: "Tiempo de configuración",
    description: "Empieza a usar FoodFlow inmediatamente"
  },
  {
    icon: Target,
    value: "95%",
    label: "Precisión en reportes",
    description: "Datos confiables para tomar decisiones"
  }
];

export function Stats() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resultados que transforman tu negocio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Miles de restaurantes ya confían en FoodFlow para optimizar sus finanzas 
            y tomar decisiones estratégicas basadas en datos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}