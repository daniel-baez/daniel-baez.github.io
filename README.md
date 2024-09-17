# README

## Daniel Baez Personal Website
============================

This is a personal website project for Daniel Baez, built using ClojureScript and Shadow CLJS, with a Reagent interface to React for rendering components.

Table of Contents
-----------------

*   [Setup](#setup)
*   [Development](#development)
*   [Building](#building)
*   [Deployment](#deployment)
*   [License](#license)

Setup
-----

### Prerequisites

*   [Nix](https://nixos.org/nix/)
*   [Node.js](https://nodejs.org/)
*   [Java](https://www.java.com/en/)


### Nix Environment

Ensure your development environment is set up with Nix and Direnv:

1.  **Install Nix:**
    
        curl -L https://nixos.org/nix/install | sh
    
2.  **Install Direnv:**
    
        nix-env -iA nixpkgs.direnv
    
3.  **Configure Direnv:**
    
    Add the following to your shell configuration file (\`~/.bashrc\`, \`~/.zshrc\`, etc.):
    
        eval "$(direnv hook bash)"  # For bash
        eval "$(direnv hook zsh)"   # For zsh
    
4.  **Allow Direnv:**
    
    In your project directory, allow Direnv to use the Nix environment:
    
        direnv allow
    

Development
-----------

### Install Dependencies

Install Node Dependencies:

    npm install

### Start Development Server

Start the Shadow CLJS development server:

    npx shadow-cljs watch app # or `npm run start`

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

Building
--------

To create a production build of the application:

    npm run build

The build output will be in the `public/js` directory.

Deployment
----------

This project uses GitHub Pages for deployment.

1.  **Build the Project:**

        npm run build

2.  **Deploy to GitHub Pages:**

        npm run deploy

License
-------

This project is licensed under the MIT License.
