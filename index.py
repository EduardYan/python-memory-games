"""
This is the principal file for run
the server of app file.
"""

from app import app

if __name__ == '__main__':
    app.run(port = 3000, debug = True)