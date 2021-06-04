## Description

Web API for converting metric and imperial units. Converts the common units used for weight, linear distance, and temperature.

## URL

https://sacred-vault-313118.wm.r.appspot.com/api

---
## Weight

Allows you to convert between kilograms (KG) and pounds (LB) and between grams (G) and ounces (OZ).

| **POST /weight** |
| ---------------- |

### Request

Path Parameters

> None

Request Body

> Required

Request Body Format

> JSON

Request JSON Attributes

| Name   | Type   | Description                                                                                      | Required? |
| ------ | ------ | ------------------------------------------------------------------------------------------------ | --------- |
| weight | Number | The weight to convert.                                                                           | Yes       |
| unit   | String | The unit of the weight being converted. Can only be one of the following: "LB", "OZ", "KG", "G". | Yes       |

Request Body Example

```json
{
  "weight": 100,
  "unit": "LB"
}
```

### Response

> Response if converted successfully

```text
Status: 200 OK
```

```json
{
  "weight": 45.35924,
  "unit": "KG"
}
```

> Invalid values or missing request body attribute(s)

```text
Status: 400 Bad Request
```

```json
{
  "Error": [
    "Weight is required and must be a number",
    "Unit is required and must be either OZ, LB, G, or KG"
  ]
}
```

> Not Acceptable

```text
Status: 406 Not Acceptable
```

> Unsupported Media Type

```text
Status: 415 Unsupported Media Type
```

---
## Temperature

Allows you to convert between Celsius (C) and Fahrenheit (F).


| **POST /temperature** |
| --------------------- |

### Request

Path Parameters

> None

Request Body

> Required

Request Body Format

> JSON

Request JSON Attributes

|  Name       |  Type  |     Description                                                      | Required? |
| ----------- | ------ | -------------------------------------------------------------------- | --------- |
| temp | Number | The temperature to convert.                                          |    Yes    |
|  unit       | String | The unit of the temperature being converted. Can only be "F" or "C". |    Yes    |

Request Body Example

```json
{
  "temp": 0,
  "unit": "C"
}
```

### Response

> Response if converted successfully

```text
Status: 200 OK
```

```json
{
  "temp": 32,
  "unit": "F"
}
```

> Invalid values or missing request body attribute(s)

```text
Status: 400 Bad Request
```

```json
{
  "Error": [
      "Temp is required and must be a number",
      "Unit is required and must be either F or C"
  ]
}
```

> Not Acceptable

```text
Status: 406 Not Acceptable
```

> Unsupported Media Type

```text
Status: 415 Unsupported Media Type
```

---
## Distance

Allows you to convert between metric and imperial linear distance units.
- Metric Units
  - CM: centimeter
  - M: meter
  - KM: kilometer
- Imperial Units
  - IN: inch
  - FT: feet
  - YD: yard
  - MI: mile


| **POST /distance** |
| ------------------ |

### Request
Path Parameters

> None

Request Body 

> Required

Request Body Format

> JSON

Request JSON Attributes

| Name         | Type   | Description                                                                                                          | Required? |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------------- | --------- |
| distance     | Number | The distance to convert.                                                                                             | Yes       |
| unit         | String | The unit of the distance being converted. Can only be one of the following: "CM", "M", "KM", "IN", "FT", "YD", "MI". | Yes       |
| desired_unit | String | The unit to convert to. If the value for *unit* provided is metric, then *desired_unit* can only be one of the following: "IN", "FT", "YD", "MI". Otherwise, *desired_unit* can only be one of the following: "CM", "M", "KM".                                                     | Yes       |

Request Body Example

```json
{
  "distance": 100,
  "unit": "FT",
  "desired_unit": "M"
}
```

### Response

> Response if converted successfully

```text
Status: 200 OK
```

```json
{
  "distance": 30.48,
  "unit": "M"
}
```

> Invalid values or missing request body attribute(s)

```text
Status: 400 Bad Request
```

```json
{
  "Error": [
    "Distance is required and must be a number.",
    "Unit is required and must be one of the following: CM,M,KM,IN,FT,YD,MI."
  ]
}
```

> Not Acceptable

```text
Status: 406 Not Acceptable
```

> Unsupported Media Type

```text 
Status: 415 Unsupported Media Type
```

---
## Area

Allows you to convert between metric and imperial area units. 
- Metric Units
  - CM2: square centimeter
  - M2: square meter
  - KM2: square kilometer
  - A: are
  - HA: hectare
- Imperial Units
  - IN2: square inch
  - FT2: square feet
  - YD2: square yard
  - MI2: square mile
  - AC: acre


| **POST /area** |
| -------------- |

### Request

Path Parameters

> None

Request Body 

> Required

Request Body Format

> JSON

Request JSON Attributes

| Name         | Type   | Description                                                                                                          | Required? |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------------- | --------- |
| area         | Number | The area to convert                                                                                                  | Yes       |
| unit         | String | The unit of the area being converted. Can only be one of the following: CM2, M2, KM2, A, HA, IN2, FT2, YD2, MI2, AC. | Yes       |
| desired_unit | String | The unit to convert to. If the value for *unit* provided is metric, then *desired_unit* can only be one of the following: "IN2", "FT2", "YD2", "MI2", "AC". Otherwise, *desired_unit* can only be one of the following: "CM2", "M2", "KM2", "A", "HA".         | Yes       |

Request Body Example

```json
{
  "area": 500,
  "unit": "AC",
  "desired_unit": "KM2"
}
```

### Response

> Response if converted successfully

```text
Status: 200 OK
```

```json
{
  "distance": 2.02343012668,
  "unit": "KM2"
}
```

> Invalid values or missing request body attribute(s)

```text
Status: 400 Bad Request
```

```json
{
  "Error": [
    "Area is required and must be a number.",
    "Unit is required and must be one of the following: CM2,M2,KM2,A,HA,IN2,FT2,YD2,MI2,AC."
  ]
}
```

> Not Acceptable

```text
Status: 406 Not Acceptable
```

> Unsupported Media Type

```text 
Status: 415 Unsupported Media Type
```