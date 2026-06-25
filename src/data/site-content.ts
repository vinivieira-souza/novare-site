import { ComponentType, SVGProps } from "react";

import {
  BuildingIcon,
  InstagramIcon,
  WhatsappIcon,
  MailIcon,
  PaletteIcon,
  TemplateLandingpageIcon,
} from "@/assets/icons/Icons";

export type ServiceItem = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconBgClass: string;
};

export type FooterContactLinks = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type ValueItem = {
  letter: string;
  word: string;
};

export type FaqItem = {
  question: string;
};

export const services: ServiceItem[] = [
  {
    title: "Landing Pages",
    description:
      "Uma página exclusiva desenhada estrategicamente para transformar visitantes em clientes reais em poucos cliques. Criamos uma estrutura com foco total em um único objetivo: eliminar distrações para acelerar suas vendas ou captação de leads.",
    icon: TemplateLandingpageIcon,
    iconBgClass: "bg-novare-icon-blue/70",
  },
  {
    title: "Instagram Profissional",
    description:
      "Transformamos o seu perfil de uma simples rede social em uma poderosa ferramenta de atração e retenção de público. Através de um planejamento estratégico, alinhamos a comunicação da sua marca com os desejos da sua audiência para gerar identificação imediata.",
    icon: InstagramIcon,
    iconBgClass: "bg-novare-icon-purple/70",
  },
  {
    title: "Sites Institucionais",
    description:
      "A presença digital que a sua marca precisa para transmitir total credibilidade, profissionalismo e autoridade no mercado. Desenvolvemos uma estrutura completa para organizar a história da sua empresa, seus valores e todas as suas soluções de forma clara e moderna.",
    icon: BuildingIcon,
    iconBgClass: "bg-novare-icon-blue/70",
  },
  {
    title: "Conteúdo & Design",
    description:
      "Mais do que apenas imagens bonitas, produzimos conteúdos visuais e textuais que refletem a essência e os valores do seu negócio. Cada publicação é planejada para prender a atenção do público no feed, educar o mercado e gerar desejo de compra nos seus seguidores.",
    icon: PaletteIcon,
    iconBgClass: "bg-novare-icon-purple/70",
  },
];

export const values: ValueItem[] = [
  { letter: "N", word: "Navegação" },
  { letter: "O", word: "Organização" },
  { letter: "V", word: "Velocidade" },
  { letter: "A", word: "Análise" },
  { letter: "R", word: "Resiliência" },
  { letter: "E", word: "Excelência" },
];

export const faqItems: FaqItem[] = [
  { question: "Vocês fazem a gravação de vídeos?" },
  { question: "Como entro em contato?" },
];

export const footerNavLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

export const footerContactLinks: FooterContactLinks[] = [
  { label: "Whatsapp", href: "#", icon: WhatsappIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "E-mail", href: "#", icon: MailIcon },
];
