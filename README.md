# Firebase realtime database extract (json) to xlsx

I have had to extract and process data from Firebase realtime databases on a number of occasions.
Sometimes I refactor the json by hand, other times I make just enough adjustments to run it through a JSON-to-CSV converter, but it almost always takes me longer than it should. So I've decided to write a very trivial, but extremely effective little tool to make this particular task so much simpler.

## The problem

Essentially the only hurdle is that an extract of data from a Firebase realtime database will, more often than not, have a structure similar to the following:

```
{
  "uid1": {
    "key1": "value1",
    "key2": "value2"
  },
  "uid2": {
    "key1": "value3",
    "key2": "value4"
  }
}
```

Instead of an array of objects, we have a plethora of key-value pairs where the values are our data objects. This throws a spanner in the works as our object now is two levels deep instead of only one level deep.

## The solution

Enter lodash and xlsx, two libraries that are worth getting to know. We read in the json data into an object, then using the lodash map function we transform our object to be only one level deep. Using xlsx we create a new workbook, convert json to a worksheet, appending the new sheet to the workbook, and saving our new xlsx file.

## How to use

Make sure you have Node.js installed on your computer!!
Crack open a new terminal window at the root of the project and run **npm install** to make sure that the libraries are installed.
Place your json file into the jsondata folder. Make sure to rename your file **data.json**.
Then run the command **node index.js** to try it out.
You should see a new file called **data.xlsx** in the root of your project.

PS: ignore the **sample.json** file inside the jsondata folder. It is there merely as an example file.