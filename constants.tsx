import { 
  Building2, 
  FileCheck, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  PenTool, 
  Receipt, 
  Package,
  Facebook,
  Instagram,
  Phone,
  Mail,
  Clock,
  MapPin
} from 'lucide-react';
import { ServiceItem, NavItem } from './types';

export const COMPANY_NAME = "RONAF ALVOS";
export const SLOGAN = "Atingimos o seu alvo de forma rápida e segura";
export const PHONE_NUMBER = "943122825";
export const PHONE_DISPLAY = "+244 943 122 825";
export const WHATSAPP_NUMBER = "244943122825";
export const EMAIL = "alvosempreendimentos01huila@gmail.com";
export const ADDRESS = "Huíla, Angola";

export const NAV_LINKS: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Quem Somos', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Diferenciais', href: '#why-us' },
  { label: 'Contactos', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Constituição de Empresas',
    description: 'Tratamos de todo o processo burocrático para legalizar o seu negócio rapidamente.',
    icon: Building2
  },
  {
    id: '2',
    title: 'Alvará Comercial',
    description: 'Emissão e tratamento de Alvará Comercial e de Prestação de Serviços.',
    icon: FileCheck
  },
  {
    id: '3',
    title: 'Abertura na INSS',
    description: 'Regularização e inscrição da sua empresa e colaboradores na Segurança Social.',
    icon: ShieldCheck
  },
  {
    id: '4',
    title: 'Inserção no SIGFE',
    description: 'Inserção do número de conta no SIGFE para recebimento por ordem de saque.',
    icon: CreditCard
  },
  {
    id: '5',
    title: 'Serviços de Limpeza',
    description: 'Limpeza profissional para casas, ruas, escolas, hospitais e empresas.',
    icon: Sparkles
  },
  {
    id: '6',
    title: 'Logotipo e Carimbo',
    description: 'Criação de identidade visual corporativa, logotipos e carimbos profissionais.',
    icon: PenTool
  },
  {
    id: '7',
    title: 'Facturação AGT',
    description: 'Emissão de facturas certificadas e reconhecidas pela AGT.',
    icon: Receipt
  },
  {
    id: '8',
    title: 'Fornecimento de Material',
    description: 'Material escolar, hospitalar e de escritório com qualidade garantida.',
    icon: Package
  },
];

export const SOCIAL_LINKS = [
  { platform: 'Facebook', url: 'https://www.facebook.com/pastorluis111', icon: Facebook },
  { platform: 'Instagram', url: 'https://www.instagram.com/ronaf011', icon: Instagram },
];