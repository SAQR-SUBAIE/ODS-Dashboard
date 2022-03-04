from flask import Blueprint, render_template, redirect, current_app, jsonify
from gevent import joinall

index = Blueprint('index', __name__)

@index.route('/')
def index_page():
    return render_template("index.html", saqr="97",title="ذِكر")




















@index.route("/invite")
def invite_page():
    return redirect(f"https://discord.com/oauth2/authorize?client_id={current_app.config['CLIENT_ID']}&scope=bot%20applications.commands&permissions=2151140424")


@index.route("/support")
def support_page():
    return redirect(f"https://discord.gg/{current_app.config['SUPPORT_ID']}")

@index.route("/vote")
def vote_page():
    return redirect(f"https://top.gg/bot/{current_app.config['CLIENT_ID']}/vote")