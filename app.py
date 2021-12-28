"""
This is the principal file for execute
the configurations of the server
"""

from flask import Flask, render_template
from random import choice
from data.options import OPTIONS_FRUITS, OPTIONS_SPORTS


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
    print(option)

    return render_template('game-fruits.html', option = option)

@app.route('/game-sports')
def game_sports():
    """
    This route is for render
    the page with the game with the sports
    """

    # choicing the option for put the images
    option = str(choice(OPTIONS_SPORTS))
    print(option)

    return render_template('game-sports.html', option = option)