from flask import Flask




app = Flask(__name__, instance_relative_config=True)

app.config.from_pyfile('config.py')

import views

app.register_blueprint(views.index)
app.register_blueprint(views.errors)


if __name__ == '__main__':
    app.run(debug=True, port=503)