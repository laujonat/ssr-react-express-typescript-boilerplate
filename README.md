### Setup
```bash
# Install virtualenv (I prefer naming the folder venv)
- $ python -m venv venv

# Install dependencies from requirements.txt
- $ pip install -r requirements.txt 
- $ pip install -U $(pip freeze | awk '{split($0, a, "=="); print a[1]}')


# Initialize your virtualenv 
- $ source venv/bin/activate 

# You may skip this if using python-dotenv
- $ export FLASK_APP=main.py
- $ export FLASK_ENV=development # optional for debug mode
```

### React/Next.js Setup 
```bash
# Navigate to the /frontend directory and run the following.
- $ npm install 
- $ npm run export # npm run build && next export. Configure build in next.config.js
```

### Deployment
> Refer to official documentation for development and production builds. [ReferenceA](https://github.com/zeit/next.js/) [ReferenceB](https://nextjs.org/learn/excel/static-html-export/export-the-index-page)

### Build
```bash
# Next build
- $ npm run build
# Frontend Development build
- $ npm run dev
```
### Auto Refresh 
> Setting the dev build to the same port as Flask will enable auto reload of the static pages.
```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next -- -p 5000",
    "build": "next build",
    "start": "next start",
    "export": "npm run build && next export"
  },
```

### Standalone Build
```bash
# Next build
- $ npm run build 
# Standalone static application withoout the need for a Node server
- $ npm run export 
```
