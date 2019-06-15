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

```bash
- $ npm install 
```

