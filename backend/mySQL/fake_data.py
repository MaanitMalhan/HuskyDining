import mysql.connector
import os
import json
from dotenv import load_dotenv, dotenv_values 
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
    query = "INSERT INTO students (name, points, flex_passes) VALUES (%s, %s, %s)"
    val = []
    
    for i in range(2):
        first_name = data_first[randint(0, n_first - 1)]
        last_name = data_last[randint(0, n_last - 1)]
        full_name = first_name + " " + last_name
        val.append((full_name, 200, 40))
    
    mycursor.executemany(query, val)
    
mydb.commit()

print(mycursor.rowcount, "record inserted.")