#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/introduction/')
def introduction():
    return render_template('introduction.html')


@app.route('/download/')
def download():
    return render_template('download.html')


@app.route('/download/build/')
def build():
    return render_template('build.html')


@app.route('/download/build28/')
def build28():
    return render_template('build28.html')


@app.route('/download/install/')
def install():
    return render_template('install.html')


@app.route('/quotes/')
def quotes():
    return render_template('quotes.html')


@app.route('/screenshots/')
def screenshots():
    return render_template('screenshots.html')


@app.route('/screenshots/wxpshots/')
def wxphsots():
    return render_template('wxpshots.html')


@app.route('/recentchanges/')
def recentchanges():
    return render_template('recentchanges.html')


@app.route('/books/')
def books():
    return render_template('books.html')


if __name__ == '__main__':
    app.run(debug=True)
