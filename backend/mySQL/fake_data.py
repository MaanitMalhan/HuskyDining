import mysql.connector
import os
import json
from dotenv import load_dotenv 
from random import randint

load_dotenv()

mydb = mysql.connector.connect(
  host= os.getenv("MYSQL_HOST"),
  user= os.getenv("MYSQL_USER"),
  password= os.getenv("MYSQL_PASSWORD"),
  database= os.getenv("MYSQL_DATABASE")
)

mycursor = mydb.cursor()

with open('data/first_names.json') as first, open('data/last_names.json') as last:
    data_first = json.load(first)
    data_last = json.load(last)
    
    n_first = len(data_first)
    n_last = len(data_last)
    query = "INSERT INTO students (netid, name, points, flex_passes) VALUES (%s, %s, %s, %s)"
    val = []
    generated_netids = set()
    
    # Changes range to for the amount of random student names inserted into the database
    n = 5000
    
    for _ in range(n):  
      first_name = data_first[randint(0, n_first - 1)]
      last_name = data_last[randint(0, n_last - 1)]
      full_name = f"{first_name} {last_name}"
      netid = ''
      
      # Generate unique netid
      while True:
        random_digits = f"{randint(10000, 99999)}"  # 5 random digits
        netid = f"{first_name[:2].lower()}{last_name[:1].lower()}{random_digits}"
        if netid not in generated_netids:
          generated_netids.add(netid)
          break
        
      val.append((netid, full_name, 200, 40))
    
    mycursor.executemany(query, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")