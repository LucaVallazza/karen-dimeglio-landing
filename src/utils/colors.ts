export const legalColors = {
  primary: {
    // Azul principal - para CTAs y elementos destacados
    light: 'bg-blue-600',
    default: 'bg-blue-700',
    dark: 'bg-blue-800',
    text: 'text-blue-700',
    hover: 'hover:bg-blue-600',
    border: 'border-blue-200',
  },
  dark: {
    // Azul oscuro/marino - para fondos de contraste y navbar
    light: 'bg-navy-700',
    default: 'bg-navy-800',
    dark: 'bg-navy-900',
    text: 'text-navy-800',
    textLight: 'text-navy-700',
  },
  gray: {
    // Grises - para fondos alternativos y elementos secundarios
    lightest: 'bg-gray-50',
    light: 'bg-gray-100',
    medium: 'bg-gray-200',
    border: 'border-gray-200',
  },
  text: {
    // Textos - asegurando buen contraste
    dark: 'text-gray-800',     // Texto principal sobre fondos claros
    muted: 'text-gray-600',    // Texto secundario sobre fondos claros
    light: 'text-white',       // Texto sobre fondos oscuros
    lightMuted: 'text-gray-300', // Texto secundario sobre fondos oscuros
  }
};