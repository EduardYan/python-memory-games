"""
This is the principal file for execute
the serverr for start the game.
"""

from flask import Flask, render_template
from random import choice
from data.options import OPTIONS_FRUITS

# creating the server
app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    """
    This route is the initial route
    for the server
    """

    return render_template('index.html')

@app.route('/game-fruits')
def game_fruits():
    """
    This route is for render
    the page with the game with the fruits
    """

    # choicing the option for put the images
    option = str(choice(OPTIONS_FRUITS))

    return render_template('game-fruits.html', option = option)


if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 3000, debug = True)
