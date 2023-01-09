<<<<<<< HEAD
import pandas as pd
import sys


df = pd.read_csv('Calories2.csv')


text = str(sys.argv[1])

text2 = text.replace('\n', ' ')


filtered_text = text2.split()


for i, element in enumerate(filtered_text):
    filtered_text[i] = element.capitalize()

for i, element in enumerate(filtered_text):
    filtered_text[i] = element.replace(',', '')

x = []
for element in filtered_text:
    if element in df['FoodItem'].values:
        if element not in x:
            x.append(element)

print(x)
length = len(x)
z = 0
processed_string = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
while z < length:
    selected_row = df[df.FoodItem == x[z]]
    selected_row_cal = selected_row.Cals_per100grams
    selected_to_string = selected_row_cal.to_string(index=False)
    processed_string[z] = selected_to_string[0:3]
    z = z + 1
print(processed_string)

total_calories = 0

for item in processed_string:
    if item.isdigit():
        total_calories += int(item)


print(str(total_calories) + ' CALORIES in total')










=======
import pandas as pd
import sys


df = pd.read_csv('Calories2.csv')

#result = df.iloc[2120:2173].apply(100,axis=1).reset_index()

#file = open('Data.txt','r')
#file = open('generated.txt','w')

#file.write(o)


#file.close()

#file = open('generated.txt', 'r')

text = str(sys.argv[1])


#def remove_special_characters(string):
 # return re.sub(r'[^A-Za-z0-9]+', ' ', string)

#cleaned_string = remove_special_characters(text)

#print(cleaned_string)

text2 = text.replace('\n', ' ')

#print(text2)
    
#f = file.readlines()

#newList = []

#for line in f:
 #   if line[-1] == '\n':
  #      newList.append(line[:-1])
   # else:
    #    newList.append(line)


filtered_text = text2.split()


for i, element in enumerate(filtered_text):
    filtered_text[i] = element.capitalize()

for i, element in enumerate(filtered_text):
    filtered_text[i] = element.replace(',', '')

x = []
for element in filtered_text:
    if element in df['FoodItem'].values:
        if element not in x:
            x.append(element)

print(x)
length = len(x)
z = 0
processed_string = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
while z < length:
    selected_row = df[df.FoodItem == x[z]]
    selected_row_cal = selected_row.Cals_per100grams
    selected_to_string = selected_row_cal.to_string(index=False)
    processed_string[z] = selected_to_string[0:3]
    z = z + 1
print(processed_string)

#fixed_x = [] 

#for item2 in processed_string:
 #   numbers = '0'
  #  for character in item:
   #     if character.isdigit():
    #        numbers += character
    #fixed_x.append(numbers)

total_calories = 0

for item in processed_string:
    if item.isdigit():
        total_calories += int(item)


print(str(total_calories) + ' CALORIES in total')










>>>>>>> 186a3124679a3c706354215366474ccf6fb9be8c
