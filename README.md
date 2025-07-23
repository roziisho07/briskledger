# Professional Accounting Services Website Section

This repository contains a key section of a modern accounting services website built with Next.js, Sanity CMS, and Tailwind CSS. The page showcases comprehensive accounting services with SEO optimization and schema markup.

## Features

- **Service Listing**: Displays core accounting services with icons, descriptions, and keywords
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **SEO Optimization**:
  - Semantic HTML structure
  - Schema.org markup for financial services
  - Keyword-rich content
- **Dynamic Content**: Integrated with Sanity CMS for service management
- **Interactive Elements**:
  - Hover effects on service cards
  - Industry carousel component
  - Clear call-to-action sections

## Technologies Used

- **Next.js**: React framework for server-side rendering
- **Sanity CMS**: Headless content management system
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: For service category icons
- **TypeScript**: Type-safe JavaScript

## Key Components

1. **Hero Section**: Clean, attention-grabbing introduction
2. **Service Grid**: Responsive 3-column layout (mobile → desktop)
3. **Schema Markup**: FinancialService schema for SEO
4. **Industry Carousel**: Dynamic industry-specific solutions
5. **CTA Section**: Conversion-focused call-to-action

## Code Highlights

```typescript
// Example of service data structure with SEO elements
const coreServices = [
  {
    icon: <FaFileInvoice className="w-8 h-8" />,
    title: "Bookkeeping Solutions",
    description: "Accurate daily/monthly bookkeeping...",
    href: "/services/bookkeeping",
    keywords: ["QuickBooks services", "monthly bookkeeping"]
  },
  // ...additional services
];

// Schema.org markup implementation
<section itemScope itemType="https://schema.org/Service">
  <div itemScope itemType="https://schema.org/FinancialService">
    <h3 itemProp="name">{service.title}</h3>
    <p itemProp="description">{service.description}</p>
  </div>
</section>
```
