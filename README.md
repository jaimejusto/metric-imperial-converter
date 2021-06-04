## Description

Web API for converting metric and imperial units. Converts the common units used for weight, linear distance, and temperature.

## URL

https://sacred-vault-313118.wm.r.appspot.com/api

## Weight

Allows you to convert between kilograms and pounds and between grams and ounces.

---

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

## Temperature

Allows you to convert between Celsius and Fahrenheit.

---

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

| Name | Type   | Description                                                          | Required? |
| ---- | ------ | -------------------------------------------------------------------- | --------- |
| temp | Number | The temperature to convert.                                          | Yes       |
| unit | String | The unit of the temperature being converted. Can only be "F" or "C". | Yes       |

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
