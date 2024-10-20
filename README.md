## Web Budget Calculator (React + Vite + Talwind)
![Welcome Page](src/images/Welcome_Page.png)
![App](src/images/Calculator%20App.png)

A React web application that allows users to calculate the budget for web development services based on selected options such as SEO, Ads, and Web development with custom options for pages and languages.

1. Table of Contents
2. Project Description
3. Technologies Used
4. Features
5. Improvements
6. Next Steps
7. Installation
8. Usage
9. Project Structure
10. Contributing
11. Project Description

The Web Budget Calculator is a tool that allows users to generate a detailed estimate for various web services, including web development, SEO, and Ads. Users can customize the estimate by selecting the number of pages and languages for web development projects. The app also stores and displays previously requested budgets, making it easy to keep track of different estimates.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For navigation between different components (Welcome and Calculator screens).
- **Vite**: As the development server and build tool.
- **Tailwind CSS**: For styling the user interface with pre-defined utility classes.
- **Context API**: For managing and passing the state related to selected services, number of pages, and languages across the components.
- **JavaScript ES6**: For managing logic and interaction.
- **HTML5 & CSS3**: For structuring and styling the content.

## Features

- Dynamic Budget Calculation: Select services like SEO, Ads, or Web, and customize the web development services with additional pages and languages to see the total price updated in real time.
- Input Validation: Ensures valid entries for client name, phone, and email before creating a new budget.
- Service Options: Users can choose from different services (SEO, Ads, Web development) and get custom pricing for web services based on the number of pages and languages.
- Budget List: Displays a list of previously requested budgets with details about the services selected and the final price.
- Filtering Budgets: Budgets can be sorted by client name, with options to reset the order.

## Improvements

- Add filter by creation date.
- Design improvements: better fit the text and find a more appropriate font for the project.

## Next Steps

- Add a serchbar: to find budgets for client name.
- Add an annual sale: include a button to pay annualy and aply a 20% of disscount.
- Local host: Make possible for the client share their budget URL to another person and see the same options.

## Installation

To run this project locally, follow these steps:
1. Clone the repository:
git clone https://github.com/IMMaribel/Pressupostos---React-Tailwind.git
2. Navigate to the project directory:
cd web-budget-calculator
3. Install the dependencies:
npm install
4. Start the development server:
npm run dev
Open your browser and visit http://localhost:3000 to access the app.

## Usage

- Welcome Page: After launching the app, you’ll be greeted by the welcome screen with a brief description of the tool. Click on "Calculadora" to start creating a budget.
- Calculator Page: On this page, select the services you need:
    SEO (€300)
    Ads (€400)
    Web Development (€500 base price, plus €30 per additional page and language)
- Customize Web Development: If you select "Web", customize the number of pages and languages to calculate the total cost.
- Submit a Budget: Fill in your client details (name, phone, email) and click the "Sol·licitar pressupost" button to submit the budget.
- View Submitted Budgets: Scroll down to see a list of previously submitted budgets, with details about the services selected and their total price.

## Project Structure

Here is an overview of the project's key files and directories:

src/

components/
Calculator.jsx        # Main calculator component
CustomService.jsx     # Component to customize pages and languages
BudgetList.jsx        # Component that displays submitted budgets
Welcome.jsx           # Welcome screen component
InfoPopup.jsx         # Reusable info popup component

data/
ServiceProvider.jsx  # Provides the value of the services
servicesContext.js   # Context API for managing services and customization
prices.js            # Price configuration for services

images/
banner.jpg           # Banner image for the calculator
casa.png             # Icon for returning to the homepage

App.js                   # Main application component
main.jsx                 # Entry point for the React app
index.css                # Global CSS (configured with Tailwind)

## Contributing

If you'd like to contribute to this project, feel free to open a pull request. Please make sure to follow the project's coding guidelines and ensure that all tests pass before submitting your changes.