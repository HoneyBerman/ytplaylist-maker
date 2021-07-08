from flask import Flask,render_template,request,redirect,url_for
from youtubesearchpython import Search
import os, io
import webbrowser
from urllib.request import urlopen
app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def home():
    if(request.method == 'GET'):
        return render_template("index.html")
    else :
        while True:
            try:
                stringoftexts = request.form.get('search_string')
                listoftexts=stringoftexts.split(',')
                listofids=[]
                for i in listoftexts:
                    search_string=Search(i, limit = 1).result()['result'][0]["id"]
                    listofids.append(search_string)

                listOfVideos = "http://www.youtube.com/watch_videos?video_ids=" + ','.join(listofids)

                response = urlopen(listOfVideos)
                playListLink = response.geturl()

                playListLink = playListLink.split('list=')[1]

                playListURL = "https://www.youtube.com/playlist?list="+playListLink+"&disable_polymer=false"
                return render_template("index.html", playListLink = playListLink)
            except:
                playListLink="nomad";
                return render_template("index.html", playListLink = playListLink)
                
            




if(__name__=="__main__"):
    app.run(use_reloader=True, debug=False)
