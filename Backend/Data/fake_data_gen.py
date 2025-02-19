import json
import inspect
from random import randint, choice

def gen_users(size):
    
    with open('rand_name_data/first_names.json') as first, open('rand_name_data/last_names.json') as last:
        data_first = json.load(first)
        data_last = json.load(last)
        
        n_first = len(data_first)
        n_last = len(data_last)
        
        users = []
        
        for _ in range(size):
            first_name = data_first[randint(0, n_first - 1)]
            last_name = data_last[randint(0, n_last - 1)]
            full_name = f"{first_name} {last_name}"
            email = f"{first_name.lower()}{last_name.lower()}@email.com"
            password = "1234567"
            flexpass = "40"
            points = "200"
            
            users.append({
                "name": full_name,
                "email": email,
                "password": password,
                "flexpass": flexpass,
                "points": points
            })
        
        # Save generated data to a JavaScript file
        with open('fake_users.js', 'w') as outfile:
            outfile.write("const users = " + json.dumps(users, indent=4) + ";\nexport default users;")


def gen_reviews(size):
    comments = [
        "Average food quality, but the staff was friendly.",
        "The best dining hall I've ever been to! Highly recommend.",
        "The food was amazing! Loved the variety and the dessert section.",
        "Good food, but the seating area was a bit crowded.",
        "Service was slow, but the food made up for it.",
        "Not a lot of vegetarian options, but the taste was great.",
        "Very clean and well-maintained, enjoyed my meal.",
        "Would not recommend, food was too salty and overpriced."
    ]
    tags_list = [
        ["friendly staff", "average"],
        ["recommend", "best"],
        ["great service", "dessert", "variety"],
        ["crowded", "good food"],
        ["slow service", "tasty"],
        ["vegetarian options", "delicious"],
        ["clean", "well-maintained"],
        ["overpriced", "salty"]
    ]

    reviews = []

    for _ in range(size):
        rating = str(randint(1, 5))
        comment = choice(comments)
        tags = choice(tags_list)
        
        reviews.append({
            "rating": rating,
            "comment": comment,
            "tags": tags
        })

    #Save generated reviews to a JavaScript file
    with open('fake_reviews.js', 'w') as outfile:
        outfile.write("const reviews = " + json.dumps(reviews, indent=4) + ";\nexport default reviews;")

def gen_requests(size):
    priorities = ["high", "medium", "low"]
    statuses = ["pending", "approved", "rejected"]

    requests = []

    for _ in range(size):
        amount = randint(1, 10)
        status = "pending"
        priority = choice(priorities)
        
        requests.append({
            "amount": amount,
            "status": status,
            "priority": priority
        })

    #Save generated requests to a JavaScript file
    with open('fake_requests.js', 'w') as outfile:
        outfile.write("const request = " + json.dumps(requests, indent=4) + ";\nexport default request;")


if __name__ == "__main__":
    while True:
        print("1. Generate Users")
        print("2. Generate Reviews")
        print("3. Generate Requets")
        
        num = int(input("Choose: "))
        
        if num == 1:
            size = int(input("Size: "))
            gen_users(size)
            
        if num == 2:
            size = int(input("Size: "))
            gen_reviews(size)
            
        if num == 3:
            size = int(input("Size: "))
            gen_requests(size)
    
