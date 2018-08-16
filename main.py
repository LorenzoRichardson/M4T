import webapp2
import os
import jinja2
import music
import playlist
#remember, you can get this by searching for jinja2 google app engine
jinja_current_dir = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class WebStart(webapp2.RequestHandler):
    def get(self):
        start_template = jinja_current_dir.get_template("home.html")
        self.response.write(start_template.render())

class searchStart(webapp2.RequestHandler):
    def get(self):
        start_template = jinja_current_dir.get_template("search.html")
        self.response.write(start_template.render())

class libraryStart(webapp2.RequestHandler):
    def get(self):
        start_template = jinja_current_dir.get_template("library.html")
        self.response.write(start_template.render())



app = webapp2.WSGIApplication([
    ('/', WebStart),
    ('/',searchStart),
    ('/', libraryStart),
], debug=True)
