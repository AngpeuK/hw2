// Task 1 Calculate the area of rectangle
let rectangleLength: number = 2 // rectangle length
let rectangleWidth: number = 4 // rectangle width
let areaOfRectangle: number = rectangleLength * rectangleWidth // calculate area of rectangle
console.log('Square is: ' + areaOfRectangle)

// Task 2 Calculate Body Mass Index (BMI)
let bodyWeight: number = 115 // weight in kg
let bodyHeight: number = 1.87 // height in m
let bmi: number = bodyWeight / (bodyHeight * bodyHeight) // calculate BMI
console.log("BMI is: " + bmi)

// Task 3 Convert Celsius to Fahrenheit
let celsiusTemperature: number = 15 // temperature in Celsius
let fahrenheitTemperature: number = (9 / 5) * celsiusTemperature + 32 // convert Celsius to Fahrenheit
console.log(celsiusTemperature + 'C is equal to ' + fahrenheitTemperature + 'F')

// Task 4
let ageNumber: number = 44 // persons age
let isAdult: boolean = ageNumber >= 18 // check if age is 18 or more
console.log('Person is adult: ' + isAdult)

// Task 5
let firstName: string = 'Andrei' // first name
let lastName: string = 'Kuzmin' // last name
let fullName: string = firstName + ' ' + lastName // concatenate strings
console.log('Full name is: ' + fullName)

// Task 7
let stringNumber: string = '100' // number as string
let stringToNumber: number = Number(stringNumber) // convert string to number
console.log('String value is: ' + stringNumber)
console.log('Converted to number value is: ' + stringToNumber)

// Task 8
let variableAsNumber: number = 10
let numberToString: string = String(variableAsNumber) // convert number to string value
console.log('Number value is: ' + variableAsNumber)
console.log('Converted to string value is: ' + numberToString)
