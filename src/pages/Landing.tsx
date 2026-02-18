import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../components/ui/button";
import { Section } from "../components/ui/section";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  QrCode,
  Utensils,
  ShieldCheck,
  Heart,
  Smartphone,
  UtensilsCrossed,
} from "lucide-react";

export const Landing = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll(); // Use window scroll

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={targetRef} className="flex flex-col gap-0 w-full">
      {/* HERO SECTION */}
      <Section className="h-screen flex items-center justify-center relative overflow-hidden pt-0 pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/70 z-10" />
          <img
            src="/hero-bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-100" // Ensure visibility
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2000";
            }}
          />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-4 md:px-6 relative z-20 text-center flex flex-col items-center justify-center h-full pb-20 will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge
              variant="success"
              className="mb-6 px-4 py-1 text-sm bg-green-500/90 text-white border-none shadow-lg backdrop-blur-sm"
            >
              Programa de Segurança Alimentar
            </Badge>
          </motion.div>

          {/* ... (keep Heading/Text animations as one-off, they are fine) ... */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 drop-shadow-xl"
          >
            Dignidade no
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 drop-shadow-sm">
              Prato de Todos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md font-medium"
          >
            Refeições nutritivas e balanceadas por apenas{" "}
            <span className="inline-flex items-center gap-2 align-middle mx-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
              <strong className="text-green-300 text-3xl font-bold tracking-tight">
                R$ 1,00
              </strong>
              <img
                src="/moeda_1_real-removebg-preview.png"
                alt="1 Real"
                className="w-10 h-10 drop-shadow-lg brightness-110"
              />
            </span>
            . Tecnologia e humanidade unidas para combater a fome em nossa
            cidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg bg-green-600 hover:bg-green-500 shadow-green-900/30 shadow-xl transition-all hover:scale-105"
            >
              Conheça o Projeto
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105"
            >
              Ver Locais Parceiros
            </Button>
          </motion.div>
        </motion.div>
      </Section>

      {/* HOW IT WORKS */}
      <Section
        id="como-funciona"
        className="bg-slate-50 dark:bg-slate-900/50 min-h-screen flex flex-col justify-center py-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              Como Funciona o <span className="text-green-600">Bandeijão</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Simples, digital e acessível. Eliminamos filas e burocracia com o
              uso de tecnologia integrada ao CadÚnico.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: <Smartphone className="w-12 h-12 text-white" />,
                bg: "bg-green-500",
                title: "1. Cadastro Digital",
                desc: "Integração automática com o CadÚnico. Basta baixar o app ou apresentar o documento nos postos de atendimento.",
              },
              {
                icon: <QrCode className="w-12 h-12 text-white" />,
                bg: "bg-blue-500",
                title: "2. Acesso via QR Code",
                desc: "Gere seu QR Code no app. Ele é sua chave de acesso aos restaurantes credenciados. Sem cartões físicos.",
              },
              {
                icon: <Utensils className="w-12 h-12 text-white" />,
                bg: "bg-orange-500",
                title: "3. Refeição a R$ 1,00",
                desc: "Pague apenas R$ 1,00 no balcão. O subsídio municipal de Iguaí cobre o restante automaticamente.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 40, damping: 15 },
                  },
                }}
                className="h-full"
              >
                <Card className="bg-white dark:bg-slate-800 border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full p-8 group relative overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 ${feature.bg} opacity-5 rounded-bl-[100px] transition-transform group-hover:scale-150 duration-700`}
                  />

                  <div
                    className={`mb-8 p-4 ${feature.bg} rounded-2xl w-fit shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* DEMO / SIMULATION */}
      <Section
        id="demo"
        className="py-32 overflow-hidden min-h-screen flex items-center bg-slate-50 dark:bg-slate-950"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="info" className="mb-4">
              Tecnologia Social
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              Controle na Palma <br />
              da Mão
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Para o cidadão, facilidade. Para a prefeitura, transparência
              total. Nosso sistema registra cada refeição em tempo real,
              evitando fraudes e garantindo que o benefício chegue a quem
              realmente precisa.
            </p>

            <div className="space-y-4">
              {[
                "Integração com base do Governo Federal",
                "Prevenção de duplicidade de benefícios",
                "Dashboard de gestão em tempo real",
                "App leve que funciona offline",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                    <ShieldCheck size={14} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Phone Mockup Frame */}
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl z-10">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 dark:bg-slate-900 relative">
                {/* App UI */}
                <div className="bg-green-600 h-1/3 w-full p-6 flex flex-col justify-between">
                  <div className="flex justify-between text-white/80">
                    <span className="text-xs">Prato do Povo</span>
                    <UtensilsCrossed size={16} />
                  </div>
                  <div className="text-white">
                    <p className="text-sm opacity-80">Saldo disponível</p>
                    <h3 className="text-3xl font-bold">R$ 1,00</h3>
                    <p className="text-xs mt-1opacity-80">
                      Restaurante Popular Centro
                    </p>
                  </div>
                </div>

                <div className="p-6 -mt-8">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg text-center">
                    <QrCode className="w-32 h-32 mx-auto text-slate-900 dark:text-white mb-2" />
                    <p className="text-xs text-slate-500 font-mono">
                      3948-2938-1029
                    </p>
                    <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-2/3 animate-pulse" />
                    </div>
                    <p className="text-[10px] text-green-600 mt-2 font-bold">
                      QR Code válido por 04:59
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                        <Utensils size={14} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold">Cardápio de Hoje</p>
                        <p className="text-[10px] text-slate-500">
                          Feijoada, Arroz, Couve, Laranja
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-green-500/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </Section>

      {/* IMPACT STATS */}
      <Section className="bg-green-600 text-white snap-start shrink-0 min-h-[50vh] flex items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center container mx-auto">
          {[
            { number: "50k+", label: "Refeições/Dia" },
            { number: "120", label: "Restaurantes" },
            { number: "R$ 1", label: "Preço Único" },
            { number: "100%", label: "Subsidiado" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </h3>
              <p className="text-green-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center py-32 snap-start shrink-0 min-h-[50vh] flex items-center bg-white dark:bg-slate-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto container px-4"
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
            <Heart size={40} />
          </div>
          <h2 className="text-4xl font-display font-bold mb-6 text-slate-900 dark:text-white">
            Juntos por um Iguaí Alimentado
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
            Apoie esta iniciativa. Leve o programa Prato do Povo para o seu
            município.
          </p>
          <Button
            size="lg"
            className="rounded-full px-12 py-6 text-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 shadow-xl hover:text-green-600 cursor-pointer"
          >
            Falar com a Coordenação
          </Button>
        </motion.div>
      </Section>
    </div>
  );
};
