# (Sort of) SSR Typescript React w/ Flask API Boilerplate

Not reinventing the wheel here, but I had a difficult time finding a SSR solution without fancy configuration. 
This is a SSR Typescript React boilerplate served from a Express Node web server.  Not fully configured, but Flask would be intended to serve API endpoints. 

Note, this is still a pretty shabby solution. 

### Web Server 
```bash
- $ cd webserver && npm install 

# Dev Build 
- $ npm run start:dev 

# Prod Build
- $ npm run start

# Debug Dev
- $ npm run start:debug
```

### Flask API (python3) 
```bash
# Install virtualenv 
- $ pip3 install -r requirements.txt 
- $ pip3 install -U $(pip freeze | awk '{split($0, a, "=="); print a[1]}')
- $ python -m venv <__dir>
- $ source venv/bin/activate 

# You may skip this if using python-dotenv
- $ export FLASK_APP=main.py
- $ export FLASK_ENV=development # optional for debug mode
```
