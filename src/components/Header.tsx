import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FF</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">FoodFlow</span>
            <Badge variant="secondary" className="hidden sm:inline-flex ml-2 text-xs">
              by Go5U
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Características
            </a>
            <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Precios
            </a>

            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-gray-700 dark:text-gray-300">
              Iniciar Sesión
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Prueba Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-4">
            <a href="#features" className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Características
            </a>
            <a href="#pricing" className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Precios
            </a>
            <a href="#testimonials" className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Testimonios
            </a>
            <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Contacto
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button variant="ghost" className="text-gray-700 dark:text-gray-300 justify-start">
                Iniciar Sesión
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white justify-start">
                Prueba Gratis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}