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
    total_calories += int(item)


print(str(total_calories) + ' CALORIES in total')










