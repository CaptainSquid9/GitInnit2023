import pandas as pd
import numpy as np
import requests



df = pd.read_csv('Calories.csv')

question = input('What is your selected food? ')


selected_row = df[df.Food == question]
selected_row_cal = selected_row.Calories
selected_to_string = selected_row_cal.to_string(index=False)
processed_string = selected_to_string[0:3]

print('That food has ' + selected_row_cal + ' per serving!')

question2 = input('Do you have any other food that you would like to eat with it? ')

selected_row2 = df[df.Food == question2]
selected_row_cal2 = selected_row.Calories
selected_to_string2 = selected_row_cal2.to_string(index=False)
processed_string2 = selected_to_string2[0:3]

#total amount of calories from the two foods chosen
print(int(processed_string2) + int(processed_string))








