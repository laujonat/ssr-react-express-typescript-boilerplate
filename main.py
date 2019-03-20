import os
from app import app
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'static')
print(static_file_dir)
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True)
