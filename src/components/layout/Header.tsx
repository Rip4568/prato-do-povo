import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "../ui/button";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { cn } from "../../lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center text-white shadow-lg">
            <UtensilsCrossed size={20} />
          </div>
          <div className="leading-tight">
            <h1 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Prato do Povo
            </h1>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
              Governo do Estado
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Como Funciona", "Transparência", "Locais", "Parceiros"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {item}
              </a>
            ),
          )}
          <Button size="sm" variant="primary" className="ml-4">
            Acessar Sistema
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 dark:text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
        >
          <nav className="flex flex-col p-4 gap-4">
            {["Como Funciona", "Transparência", "Locais", "Parceiros"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-base font-medium text-slate-600 dark:text-slate-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ),
            )}
            <Button className="w-full">Acessar Sistema</Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};
