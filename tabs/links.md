---
layout: links
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_links

# publish date (used for seo)
# if not specified, site.time will be used.
#date: 2022-03-03 12:32:00 +0000

# for override items in _data/lang/[language].yml
#title: My title
#button_name: "My button"
# for override side_and_top_nav_buttons in _data/conf/main.yml
#icon: "fa fa-bath"

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-03 12:32:00 +0000
# check the meta_common_description in _data/owner/[language].yml
#meta_description: ""

# optional
# if you enabled image_viewer_posts you don't need to enable this. This is only if image_viewer_posts = false
#image_viewer_on: true
# if you enabled image_lazy_loader_posts you don't need to enable this. This is only if image_lazy_loader_posts = false
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
#published: false

# you can always move this content to _data/content/ folder
# just create new file at _data/content/links/[language].yml and move content below.
###########################################################
#                Links Page Data
###########################################################
page_data:
  main:
    header: "Links"
    info: "Here are a number of links that I find interesting."

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "Coding clubs"
      type: id_codingclub
      color: "#3366cc"
    - title: "Academic information"
      type: id_research
      color: "#55ffee"
    - title: "Learning coding"
      type: id_coding
      color: "#62b462"
    - title: "Other websites"
      type: id_other
      color: "#50568a"

  list:
    -
    # Coding clubs
    - type: id_codingclub
      title: "Wageningen University"
      url: "https://geoscripting-wur.github.io/"
      info: "Geoscripting course at Wageningen University."
    - type: id_codingclub
      title: "Edinburgh Coding Club"
      url: "https://ourcodingclub.github.io/"
      info: "Coding club at Edinburgh University."
    - type: id_codingclub
      title: "Spatial Thoughts"
      url: "https://spatialthoughts.com/"
      info: "A learning platform for modern geospatial technologies."
    - type: id_codingclub
      title: "Statistics Globe"
      url: "https://statisticsglobe.com/"
      info: "List of R and Python programming tutorials."
    - type: id_codingclub
      title: "GeoLatinas"
      url: "https://geolatinas.weebly.com/"
      info: "Embrace and inspire Latinas to pursue and thrive in careers in Geoscience and Planetary Science."

    # Academic information
    - type: id_research
      title: "Scholar google"
      url: "https://scholar.google.com/"
      info: "Search the world's information, including webpages, images, videos and more."
    - type: id_research
      title: "	Researchgate"
      url: "https://www.researchgate.net/"
      info: "Discover scientific knowledge and stay connected to the world of science."
    - type: id_research
      title: "Web of Science"
      url: "https://access.clarivate.com/login?app=wos&alternative=true&shibShireURL=https:%2F%2Fwww.webofknowledge.com%2F%3Fauth%3DShibboleth&shibReturnURL=https:%2F%2Fwww.webofknowledge.com%2F%3FauthCode%3Dnull%26app%3Dwos%26locale%3Den-US&referrer=app%3Dwos%26authCode%3Dnull%26locale%3Den-US&roaming=true"
      info: "Is a paid-access platform that provides (typically via the internet) access to multiple databases that provide reference and citation data from academic journals, conference proceedings, and other documents in various academic disciplines. "
      

    # Learning coding
    - type: id_coding
      title: "python-de-cero-a-experto"
      url: "https://council.cl/cursos/python-de-cero-a-experto/"
      info: "Curso de Python en español."
    - type: id_coding
      title: "mineduc.cl-phyton"
      url: "https://sitios.mineduc.cl/lenguajesdigitales/phyton.html"
      info: "Curso Mineduc de Python en español."
    - type: id_coding
      title: "R-bloggers"
      url: "https://www.r-bloggers.com/"
      info: "R news and tutorial contributed by hundreds of R bloggers."
    - type: id_coding
      title: "Udemy"
      url: "https://www.udemy.com/"
      info: "Is a for-profit massive open online course (MOOC) provider aimed at professional adults and students."


    # Other websites  
    - type: id_other
      title: "Cartógrafo.cl"
      url: "https://cartografo.cl/"
      info: "Un espacio académico-cartográfico, con muchas ganas de insertarse en la tecnología y las comunicaciones digitales."
    - type: id_other
      title: "EAGLE Msc"
      url: "http://eagle-science.org/"
      info: "Master applied EArth Observation and Geoanalysis of the Living Environment."
    - type: id_other
      title: "Stackoverflow"
      url: "https://stackoverflow.com/"
      info: "Empowering the world to develop technology through collective knowledge."
    - type: id_other
      title: "AniMove"
      url: "https://animove.org/"
      info: "AniMove courses are focused on the use of remote sensing and animal movement for conservation based on open source software entirely."
    - type: id_other
      title: "SNAP ESA"
      url: "https://step.esa.int/main/download/snap-download/"
      info: "Here you can download the latest installers for SNAP and the Sentinel Toolboxes."
---
