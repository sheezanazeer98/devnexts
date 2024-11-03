import "./globals.css";
import { Josefin_Sans } from 'next/font/google';

export const metadata = {
  title: "DevNexts | Innovative Software Solutions",
  description: "DevNexts is a forward-thinking IT agency delivering AI, blockchain, cloud, and web solutions tailored for business growth.",
};

const Josef = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devnexts.com/" />
        <meta property="og:title" content="DevNexts | Innovative Software Solutions" />
        <meta property="og:description" content="DevNexts is a forward-thinking IT agency delivering AI, blockchain, cloud, and web solutions tailored for business growth." />
        <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQHH3xpquFUChg/company-logo_200_200/company-logo_200_200/0/1730576866490/dev_nexts_logo?e=1738800000&v=beta&t=fvY4yyo8zxImpDtcA2dCTI7Wd_zN1Ucn_hWYquQtX5Q" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.devnexts.com/" />
        <meta property="twitter:title" content="DevNexts | Innovative Software Solutions" />
        <meta property="twitter:description" content="DevNexts specializes in transforming ideas into powerful, scalable applications tailored to meet business needs." />
        <meta property="twitter:image" content="https://www.devnexts.com/twitter-image.jpg" />

        {/* LinkedIn */}
        <meta property="og:url" content="https://www.linkedin.com/company/dev-nexts" />
        <meta property="og:title" content="DevNexts | Innovative Software Solutions" />
        <meta property="og:description" content="Partner with DevNexts to unlock new possibilities and drive growth with AI, blockchain, cloud, and web technologies." />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Styles for External Libraries */}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        {/* SEO Keywords */}
        <meta name="keywords" content="DevNexts, IT agency, software solutions, AI, blockchain, cloud technology, web development, business growth, scalable applications, innovative technology, secure solutions, custom software, digital transformation, tech consulting" />
        <meta name="keywords" content="DevNexts, DevNexts AI, DevNexts blockchain, blockchain DevNexts, DevNexts cloud, DevNexts web solutions, DevNexts software, DevNexts IT agency, DevNexts digital transformation, DevNexts tech solutions, DevNexts software development, DevNexts consulting, DevNexts innovation, DevNexts scalable applications, DevNexts custom software, DevNexts AI solutions, DevNexts blockchain solutions, DevNexts cloud technology, DevNexts web development, DevNexts business growth, DevNexts enterprise solutions, DevNexts SaaS, DevNexts application development, DevNexts secure solutions, DevNexts digital business transformation, DevNexts data-driven solutions, DevNexts emerging technologies, DevNexts machine learning, DevNexts decentralized applications, DevNexts cloud migration, DevNexts IT consulting, DevNexts end-to-end development, DevNexts startup software, DevNexts custom app development, DevNexts DevOps services, DevNexts cloud infrastructure, DevNexts software for SMEs" />
       
        <meta name="google-site-verification" content="59rHIuL5ZP95DNko1Go3HH4H307tND6-STqM0awxA-w" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DevNexts" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.devnexts.com/" />

        {/* LinkedIn Company Profile */}
        <link rel="me" href="https://www.linkedin.com/company/dev-nexts" />
      </head>
      <body className={Josef.className}>{children}</body>
    </html>
  );
}
