# Flask React/Next.js SSR 🛠🚀✴️🐍
> This is a boilerplate for a Next.js SSR application with Flask server. Unlike CSR applications, your server response to a browser serves a static HTML page ready to be rendered. Next.js is a minimalist React framework solution that supports Server Side rendering and comes with many useful built-in features simplifying the process of deploying a production ready application. 

#### [Flask](http://flask.pocoo.org/) Backend
#### [React v16](https://facebook.github.io/react/) + [Next.js](https://github.com/zeit/next.js/) Frontend 


## Quickstart 💡

### Configuration ⚙️
This boilerplate will deploy your application as a static HTML app.  Flask uses the  `/templates` directory within your Flask directory to serve your static pages.  This is where we will configure Next.js to render our frontend build.  It is recommended you configure a custom build directory.  This boilerplate will build the `.next` in the `/frontend` directory, where our entry file is configured to be `pages/index.js`.
[Build Documentation](https://github.com/zeit/next.js#custom-configuration)
```js
module.exports = {
  exportPathMap: function() {
    return {
      '../../app/templates': { page: '/' }
    }
  }
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
- $ export FLASK_APP=exec.py
- $ export FLASK_ENV=development # optional for debug mode
```

### React/Next.js Setup ⚛️⚛︎
```bash
# Navigate to the /frontend directory and run the following.
- $ npm install 
- $ npm run export # npm run build && next export. Configure build in next.config.js
```

# Run your SSR Application 
```bash
# Run the Flask SSR application from your root directory
- $ flask run 
```

Congratulations! You have now successfully set up a Flask application that serves React with Next.js as a SSR application. 🚀






