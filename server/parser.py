
import json
'''
with open('server/user_data.json') as f:
    userData = j.load(f)
    print(f)
'''
try:
    userData = open('user_data.json')
except:
    print("File doesn't exist")
else:
    jsonData = json.load(userData)
    print("Success!!")



# Let's me see how many 
for dataPoints in jsonData:
    print(dataPoints)
'''
Activity - Having trouble parsing :/
Ads and data
App Settings
Comment - Comment Counter Done
Direct Messages
Profile
Video
"""
'''
for info in jsonData['Activity']:
    for second in jsonData['Activity'][info]:
        print (second + 'hi')
        if second is None:
            print(second + "hmmm yes yes")
            for third in jsonData['Activity'][info][second]:
                print(third)
        else:
            print(second + 'fuck it\'s not working!')
            continue

     
# Functions to count how many comment's you've left!
def commentCounter():
    count = 0

    for info in jsonData['Comment']:
        for second in jsonData['Comment'][info]:
            for third in jsonData['Comment'][info][second]:
                print(third)
                count += 1
    return count

# print(commentCounter())


userData.close()