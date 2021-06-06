import selenium
from selenium import webdriver
from selenium.webdriver import ActionChains

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
import time


# URL = 'https://www.pinterest.co.kr/TypoTouch/_created/'
URL = 'https://www.pinterest.co.kr/TypoTouch/%EB%AA%85%EC%96%B8-%EB%AA%85%EB%8C%80%EC%82%AC-%EB%85%B8%EB%9E%98%EA%B0%80%EC%82%AC-%EC%86%8D%EB%8B%B4/'

driver = webdriver.Chrome(executable_path="C:/Users/insu/Desktop/Develop/TypoParser/Crawler/chromedriver.exe")
driver.get(url=URL)

time.sleep(5)

# images = driver.find_elements_by_class_name("hCL kVc L4E MIw")
images = driver.find_elements_by_class_name("GrowthUnauthPinImage__Image")
print(len(images))
for image in images:
    print(image.get_attribute('src').replace("236x", "564x"))