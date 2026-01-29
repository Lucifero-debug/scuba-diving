# Goa Sports Adventure 🌊🤿

> **Your Gateway to Unforgettable Underwater Adventures in Goa & Andaman**

Goa Sports Adventure is a premium web platform designed to facilitate booking and information dissemination for scuba diving and water sports activities. Built with a focus on user experience, performance, and visual appeal, it connects adventure seekers with professional diving experiences.

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Next.js](https://img.shields.io/badge/Next.js-16.1-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## ✨ Features

- **Immersive UI/UX**: High-quality animations using Framer Motion and React Spring.
- **Interactive 3D Elements**: Enriched with React Three Fiber for 3D visual storytelling.
- **Comprehensive Listings**: Detailed sections for Scuba Diving, Water Sports, and Adventure packages.
- **Dynamic Content**: Carousels, Accordions, and reveal effects for engaging browsing.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Modern Tech Stack**: Leveraging the latest Next.js 16 App Router and server components.
- **Contact & Inquiry**: Integrated forms for user inquiries via EmailJS/Nodemailer.

## 🛠 Tech Stack

This project is built using the following technologies:

### Framework & Core
- **[Next.js 16](https://nextjs.org/)**: React framework for production (App Router).
- **[React 19](https://react.dev/)**: JS library for building user interfaces.

### Styling & Design
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework.
- **[NextUI](https://nextui.org/)**: Beautiful, fast and modern React UI library.
- **[Shadcn UI](https://ui.shadcn.com/)**: Reusable components built with Radix UI and Tailwind CSS.
- **Styled Components**: For specific component styling needs.
- **Lucide React & React Icons**: Icon libraries.

### Animation & 3D
- **[Framer Motion](https://www.framer.com/motion/)**: Production-ready motion library for React.
- **[React Spring](https://www.react-spring.dev/)**: Spring-physics based animation library.
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)**: React renderer for Three.js.
- **[TSParticles](https://particles.js.org/)**: Lightweight particles library.

### Utilities
- **EmailJS / Nodemailer**: For handling email notifications and contact forms.
- **Clsx & Tailwind-merge**: For efficient class name handling.

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm** or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/scuba_diving.git
   cd scuba_diving
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables
Create a `.env.local` file in the root directory and add the following variables (you will need to provide your own credentials):

```env
SMTP_EMAIL=your_email@example.com
SMTP_PASSWORD=your_email_password
```

### Running the App

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
.
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components
├── public/               # Static assets (images, icons)
├── styles/               # Global styles
├── lib/                  # Utility functions
├── .env.local            # Environment variables
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Project dependencies
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
