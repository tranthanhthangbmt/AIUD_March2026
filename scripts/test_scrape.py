import requests
from bs4 import BeautifulSoup
import traceback

try:
    url = "https://iiab.live/modules/en-gcf_learn_2021/edu.gcfglobal.org/en/word/getting-started-with-word/1/index.html"
    res = requests.get(url)
    soup = BeautifulSoup(res.content, 'html.parser')
    
    print("Classes in html for divs, mains, articles:")
    for tag in soup.find_all(['div', 'main', 'article']):
        class_str = tag.get('class')
        id_str = tag.get('id')
        if class_str or id_str:
             print(f"Tag: {tag.name}, Class: {class_str}, ID: {id_str}")
             
except Exception as e:
    traceback.print_exc()
