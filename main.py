import webapp2
import os
import jinja2
import users
import music
import userDic


#remember, you can get this by searching for jinja2 google app engine
jinja_current_dir = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

current_user="zay"
session_userDic = {"username": current_user, "profile_img": "/assets/MusicLibrary/Title-Images/placeholder.png"}



# def encrypt(password, shift):
#     word = current_user[0]
#     for i in password:
#         i = i + word
#



class Login(webapp2.RequestHandler):

    def get(self):
        start_template = jinja_current_dir.get_template("assets/Login/login.html")
        self.response.write(start_template.render())


    def user_specifier(self, session_user):
        # global current_user
        # session_user = current_user
        global session_userDic
        session_userDic["username"] = session_user

        if session_userDic["profile_img"] == "":
            session_userDic["profile_img"] = "assets/Login/Images/mt4.png"



    def passw(self,passr,password):
        yung = passr
        if password != users.people.get(passr):
            # print("ERROR WRONG PASSWORD")
            # passw(passr)
            # between_check = False
            return False
        else:
            # between_check = True
            return True


    def user_name(self,userIn,password):

        if userIn not in users.people.keys():
            # print("No User")
            # user_name(name)
            return False
        else:
            userName = userIn
            between_check= self.passw(userName,password)

            if(between_check == True):
                return True
            else:
                return False



    def signup(self,username,password,passwordcheck):

    	if password == passwordcheck:

    		# filen = 'users.py'
    		# ufile = open('user.py', "a+")
    		# lint = {'b':'y'}

    		# ufile.write('people.update('+'{' + '"'+ str(username)+'"' + ':' + '"' + str(password) +'"' + '}' ')\n' )
            users.people[username] = password
    		# ufile.close()
    		# return True

    	else :
            return_template = "password not the same"
            self.response.write(return_template)
            # return False
    		# signup()


    def current_user(self,username):
        return username


    def post(self):
        create_name = self.request.get('create_user')
        create_passrs = self.request.get('create_password')
        create_passrs_check = self.request.get('create_password_check')

        if (create_name == '' and create_passrs == '' and create_passrs_check == ''):

            name = self.request.get('userName_in')
            passrs = self.request.get('password_in')

            Auth_username = self.user_name(name,passrs)
            # Auth_Password = between_check
            my_dic = {"name": name}
            if(Auth_username == True):

                # return_template = jinja_current_dir.get_template("index.html")
                # self.response.write(return_template.render(my_dic))

                global current_user
                current_user = name

                global session_userDic
                session_userDic["username"] = current_user

                self.redirect("/result")


            else:
                return_template = "user not found"
                self.response.write(return_template)

        else:
            self.signup(create_name,create_passrs,create_passrs_check)
            name = self.request.get('userName_in')
            passrs = self.request.get('password_in')
            Auth_username = self.user_name(name,passrs)
            # Auth_Password = between_check
            my_dic = {"name": name}
            if(Auth_username == True):

                # return_template = jinja_current_dir.get_template("index.html")
                # self.response.write(return_template.render(my_dic))

                current_user = name
                global session_userDic
                session_userDic["username"] = current_user

                self.redirect("/result")

            else:
                return_template = "user not found"
                self.response.write(return_template)



class WebStart(webapp2.RequestHandler):
    def get(self):
        global session_userDic
        start_template = jinja_current_dir.get_template("index.html")
        myDic = {"key": music.playlist, "user": current_user}
        myDic.update(session_userDic)
        self.response.write(start_template.render(myDic))



class songs(webapp2.RequestHandler):
    def get(self):
        start_template = jinja_current_dir.get_template("templates/songs.html")
        myDic = {"key": music.playlist, "user": current_user}
        self.response.write(start_template.render(myDic))


class userSettings(webapp2.RequestHandler):
    def get(self):
        global session_userDic
        start_template = jinja_current_dir.get_template("templates/user.html")
        myDic = {"key": music.playlist, "user": current_user}
        myDic.update(session_userDic)
        # if current_user == userDic.userSettings["userID"]:

        self.response.write(start_template.render(myDic))



app = webapp2.WSGIApplication([
    ('/', Login),
    ('/result', WebStart),
    ('/song', songs),
    ('/user', userSettings)
], debug=True)
