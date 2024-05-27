# React To-Do App

A simple To-Do List application built with React and Bootstrap. This project demonstrates the use of React components, styled-components, and Bootstrap for styling. The development environment is isolated using Nix and Direnv.

## Table of Contents

- [Installation](#installation)
- [Development Setup](#development-setup)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [License](#license)

## Installation

Before you begin, ensure you have the following installed on your machine:

- Node.js
- Yarn (or npm)
- Nix
- Direnv

## Development Setup

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/<your-username>/<your-repo-name>.git
    cd <your-repo-name>
    ```

2. **Set Up Direnv**:

    Ensure Direnv is enabled in your shell configuration. Add the following to your `~/.bashrc` or `~/.zshrc`:

    ```bash
    eval "$(direnv hook bash)"  # For bash
    eval "$(direnv hook zsh)"   # For zsh
    ```

    Allow Direnv to load the environment:

    ```bash
    direnv allow
    ```

3. **Install Dependencies**:

    Use Yarn to install the project dependencies:

    ```bash
    yarn install
    ```

    If you prefer npm, run:

    ```bash
    npm install
    ```

## Running the Application

1. **Start the Development Server**:

    ```bash
    yarn start
    ```

    This will start the development server, and you can open your browser to `http://localhost:3000` to see your To-Do List app in action.

## Deployment

This project uses GitHub Pages for deployment. The deployment script will build the project and publish it to the `website` branch.

1. **Build and Deploy**:

    ```bash
    yarn deploy
    ```

    This command will build the React app and publish the contents of the `build` directory to the `website` branch on GitHub.

## .gitignore

Here's the `.gitignore` file for the project:

    ```
    # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

    # dependencies
    /node_modules
    /.pnp
    .pnp.js

    # testing
    /coverage

    # production
    /build

    # misc
    .DS_Store
    .env.local
    .env.development.local
    .env.test.local
    .env.production.local
    .envrc
    .env
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    ```

## License

This project is licensed under the MIT License.
