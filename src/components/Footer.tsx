import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FF</span>
              </div>
              <span className="text-xl font-bold">FoodFlow</span>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                by Go5U
              </Badge>
            </div>
            <p className="text-gray-400 leading-relaxed">
              La plataforma líder en gestión financiera para restaurantes en Latinoamérica. 
              Transformamos la manera en que los propietarios comprenden y gestionan las finanzas de su negocio.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-medium">Producto</h3>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">Características</a>
              <a href="#" className="block hover:text-white transition-colors">Precios</a>
              <a href="#" className="block hover:text-white transition-colors">Demo</a>
              <a href="#" className="block hover:text-white transition-colors">Integraciones</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-medium">Empresa</h3>
            <div className="space-y-2 text-gray-400">
              <a href="#" className="block hover:text-white transition-colors">Sobre Go5U</a>
              <a href="#" className="block hover:text-white transition-colors">Blog</a>
              <a href="#" className="block hover:text-white transition-colors">Carreras</a>
              <a href="#" className="block hover:text-white transition-colors">Prensa</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-medium">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@go5u.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+51 xxx xxx xxx</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>UPC</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <div className="text-sm">
            © 2024 Go5U. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}