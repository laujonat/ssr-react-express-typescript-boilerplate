# Flask React/Next.js SSR 🛠🚀✴️🐍 
> This is a boilerplate for a Next.js SSR application with Flask server. Unlike CSR applications, your server response to a browser serves a static HTML page ready to be rendered. Next.js is a minimalist React framework solution that supports Server Side rendering and comes with many useful built-in features simplifying the process of deploying a production ready application. 

**Note** This is a work in progress and will be updating this boilerplate regularly from protyping to production deployments.  Please contribute or credit this repository if you decide to expand upon the existing basic functionality. 

#### [Flask](http://flask.pocoo.org/) Backend
#### [React v16](https://facebook.github.io/react/) + [Next.js](https://github.com/zeit/next.js/) Frontend 

## Quickstart 💡

### Configuration ⚙️
This boilerplate will deploy your application as a static HTML app.  Flask uses the  `/templates` directory within your Flask directory to serve your static pages.  This is where we will configure Next.js to render our frontend build.  
**It is recommended you configure a custom build directory.**  
This boilerplate follows Next.js convention serving our static app files in `/static`, and the main entry file is located at `pages/index.js`.
[Build Documentation](https://github.com/zeit/next.js#custom-configuration)
```js
module.exports = {
  exportPathMap: () => ({
    '../../app/templates': { page: '/' }
  }),
  distDir: '/static'
}
```

### Flask Setup 🐍
```bash
# Install python3 (using 3.7)
- $ brew install python # brew

# Set path 
- $ export PATH=/usr/local/bin:/usr/local/sbin:$PATH 

# Install pip3
- $ python -m pip install --user --upgrade pip # pip3

# Install virtualenv (I prefer naming the folder venv)
- $ python -m venv venv

# Install dependencies from requirements.txt
- $ pip install -r requirements.txt 

# Initialize your virtualenv 
- $ source venv/bin/activate 

# You may skip this if using python-dotenv
- $ export FLASK_APP=main.py
- $ export FLASK_ENV=development # optional for debug mode
```

### React/Next.js Setup ⚛️
```bash
# Navigate to the /frontend directory and run the following.
- $ npm install 
- $ npm run export # npm run build && next export. Configure build in next.config.js
```

# Deployment
> Refer to official documentation for development and production builds. [ReferenceA](https://github.com/zeit/next.js/) [ReferenceB](https://nextjs.org/learn/excel/static-html-export/export-the-index-page)


# SSR Build
```bash
# Next build
- $ npm run build
# Frontend Development build
- $ npm run dev
```

# Standalone Build
```bash
# Next build
- $ npm run build 
# Standalone static application withoout the need for a Node server
- $ npm run export 
```

Happy hacking. 🚀
