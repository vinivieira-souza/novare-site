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
      "Criamos uma página exclusiva desenhada estrategicamente para transformar visitantes curiosos em clientes reais com poucos cliques.",
    icon: TemplateLandingpageIcon,
    iconBgClass: "bg-novare-icon-blue/70",
  },
  {
    title: "Instagram Profissional",
    description:
      "Transformamos o seu perfil de uma simples rede social em uma poderosa ferramenta de atração e retenção de público, através de um planejamento estratégico.",
    icon: InstagramIcon,
    iconBgClass: "bg-novare-icon-purple/70",
  },
  {
    title: "Sites Institucionais",
    description:
      "Desenvolvemos uma estrutura para trazer a presença digital que a sua marca precisa, transmitindo total credibilidade, profissionalismo e autoridade no mercado.",
    icon: BuildingIcon,
    iconBgClass: "bg-novare-icon-blue/70",
  },
  {
    title: "Conteúdo & Design",
    description:
      "Cada publicação é planejada para prender a atenção do público no feed. Produzimos conteúdos visuais e textuais que refletem a essência e os valores do seu negócio.",
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
