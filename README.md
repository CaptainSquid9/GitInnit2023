# Food Einstein [Will receive front-end update soon]
 [![Youtube video](https://img.youtube.com/vi/lwidygEgF_g/0.jpg)](https://www.youtube.com/watch?v=lwidygEgF_g)
 ## Inspiration

We were inspired to make this project, since we were interested in knowing the amount of calories of the foods we were eating. We knew that, although some foods come with the amount of calories that they contain, most don't. So, we decided that it could be useful to use our knowledge of webscraping and the internet to be able to learn the amount of calories any food in the world contains.

## What it does

You put the name of a food into the search bar, and then we web scrape the internet for websites that contain the ingredients of that food, and with some datasets that we have, we see how many calories each ingredient has.

## How we built it

We built the front-end using Javascript, CSS, and HTML, to make the user interface. But for the back-end processing, we used Python and one of it's libraries for data processing, Pandas. We used HTTPS connections to connect the answers that the user typed in to our Python code, so that it could process through the datasets and so on. But before the HTTPS was sent to the Python code, we used the Javascript library, Pupeteer, to web scrape for websites that told us about the ingredients that the certain food would have. So, all the Python code would have to do would be to look for those ingredients in our datasets, with their respective calories, and send them back to the front-end.

## Challenges we ran into

Connecting the front-end with the back-end through HTTPS. 

Making it so that the Python code can actually find the ingredients in the datasets.

## Accomplishments that we're proud of

We were able to connect the front-end and the back-end through HTTP connections, although it was a bit buggy, and didn't work a lot of the time.

## What we learned

That we should be more careful when writing the Python code that processes and looks through the datasets, since one small mistake can make the whole thing wrong.

## What's next for Food Einstein

Making it also calculate other dietary things, like sugars.

