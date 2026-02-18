export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display font-bold text-lg mb-4">
              Prato do Povo
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              Garantindo segurança alimentar e dignidade para todos os cidadãos
              da nossa cidade. Uma iniciativa da Prefeitura de Iguaí.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-green-600">
                  Portal da Transparência
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Credenciamento de Restaurantes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>0800 123 4567</li>
              <li>ouvidoria@iguai.ba.gov.br</li>
              <li>Sede da Prefeitura, Centro</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
          © 2026 Prefeitura de Iguaí. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
