<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/your_username/payment-static-website">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Payment Static Website</h3>

  <p align="center">
    A modern payment page template for e-commerce applications!
    <br />
    <a href="https://github.com/your_username/payment-static-website"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/your_username/payment-static-website">View Demo</a>
    ·
    <a href="https://github.com/your_username/payment-static-website/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/your_username/payment-static-website/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This repository contains the source code for **Payment Static Website**, a modern web-based payment page template designed for e-commerce applications. The project was developed as part of a university course final project (UAS) focusing on creating an intuitive and responsive payment interface.

The system provides a comprehensive payment solution that allows users to select from various service packages, apply promotional codes, choose their preferred payment methods, and complete transactions with a seamless user experience.

Here's why this project stands out:

- Clean and modern UI design built with Tailwind CSS for optimal user experience
- Multiple payment methods support including bank transfers and e-wallet options
- Responsive design that works perfectly on desktop and mobile devices
- Easy to customize and integrate into existing e-commerce platforms

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project is built using modern web technologies to ensure optimal performance and maintainability.

- [![HTML5][HTML5.com]][HTML5-url]
- [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url]
- [![JavaScript][JavaScript.com]][JavaScript-url]
- [![CSS3][CSS3.com]][CSS3-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 14.0 or higher)
  ```sh
  # Check if Node.js is installed
  node --version
  ```
- npm (usually comes with Node.js)
  ```sh
  npm install npm@latest -g
  ```

### Installation

Follow these steps to set up the project locally:

1. Clone the repository

   ```sh
   git clone https://github.com/your_username/payment-static-website.git
   ```

2. Navigate to the project directory

   ```sh
   cd payment-static-website
   ```

3. Initialize npm (if package.json doesn't exist)

   ```sh
   npm init -y
   ```

4. Install Tailwind CSS and its dependencies

   ```sh
   npm install -D tailwindcss
   ```

5. Initialize Tailwind CSS configuration

   ```sh
   npx tailwindcss init
   ```

6. Configure your `tailwind.config.js` file

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./**/*.{html,js}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

7. Create your main CSS file (e.g., `src/input.css`) and add Tailwind directives

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

8. Build your CSS

   ```sh
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```

9. Include the compiled CSS in your HTML

   ```html
   <link href="./dist/output.css" rel="stylesheet" />
   ```

10. Open `index.html` in your browser or use a local server

    ```sh
    # Using Python (if installed)
    python -m http.server 8000

    # Using Node.js http-server (install globally first)
    npm install -g http-server
    http-server
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This payment template can be used in various scenarios:

1. **E-commerce Integration**: Integrate the payment page into your existing e-commerce platform
2. **SaaS Subscription**: Use it for subscription-based services with different pricing tiers
3. **Service Booking**: Adapt it for service booking platforms
4. **Digital Product Sales**: Perfect for selling digital products or courses

### Basic Implementation

1. Open `index.html` in your browser
2. Select a package (Basic, Premium, Professional, or Enterprise)
3. Apply a promo code if available
4. Choose your preferred payment method
5. Complete the transaction

_For more examples and detailed implementation guide, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->

## Features

- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean and intuitive interface built with Tailwind CSS
- **💳 Multiple Payment Methods**: Support for bank transfers and e-wallet payments
- **🏷️ Promo Code System**: Built-in promotional code functionality
- **📦 Package Selection**: Four different service packages to choose from:
  - Basic Package
  - Premium Package
  - Professional Package
  - Enterprise Package
- **✅ Transaction Confirmation**: Pop-up confirmation for completed transactions
- **📊 Transaction History**: Keep track of payment history
- **⚡ Fast Loading**: Optimized performance with minimal dependencies
- **🔧 Easy Customization**: Simple to modify and adapt to your needs

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Basic payment page layout
- [x] Package selection functionality
- [x] Payment method integration
- [x] Promo code system
- [x] Transaction confirmation
- [x] Responsive design implementation
- [ ] Payment gateway integration
- [ ] User authentication system
- [ ] Advanced transaction history
- [ ] Multi-language support
  - [ ] Indonesian
  - [ ] English
- [ ] Dark mode theme
- [ ] Email confirmation system
- [ ] Advanced analytics dashboard

See the [open issues](https://github.com/your_username/payment-static-website/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/your_username/payment-static-website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=your_username/payment-static-website" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/payment-static-website](https://github.com/your_username/payment-static-website)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Resources and tools that made this project possible:

- [Tailwind CSS](https://tailwindcss.com)
- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [Google Fonts](https://fonts.google.com)
- [Unsplash](https://unsplash.com)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/your_username/payment-static-website.svg?style=for-the-badge
[contributors-url]: https://github.com/your_username/payment-static-website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/your_username/payment-static-website.svg?style=for-the-badge
[forks-url]: https://github.com/your_username/payment-static-website/network/members
[stars-shield]: https://img.shields.io/github/stars/your_username/payment-static-website.svg?style=for-the-badge
[stars-url]: https://github.com/your_username/payment-static-website/stargazers
[issues-shield]: https://img.shields.io/github/issues/your_username/payment-static-website.svg?style=for-the-badge
[issues-url]: https://github.com/your_username/payment-static-website/issues
[license-shield]: https://img.shields.io/github/license/your_username/payment-static-website.svg?style=for-the-badge
[license-url]: https://github.com/your_username/payment-static-website/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[HTML5.com]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://html.spec.whatwg.org/
[TailwindCSS.com]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[JavaScript.com]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CSS3.com]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://www.w3.org/Style/CSS/
