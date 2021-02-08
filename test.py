from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    print('hello word')

app.run()



# @app.route('/<name>')
# def user(name):
#     return f"Hello{name}!"
#
# @app.route('/admin')
# def admin():
#     return redirect(url_for('user',name='Admin!'))