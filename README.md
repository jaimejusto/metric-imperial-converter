## Description 
Web API for converting metric and imperial units. Converts the common units used for weight, linear distance, and temperature. 

## URL
https://sacred-vault-313118.wm.r.appspot.com/api

## Weight
Allows you to convert between kg and lb and between g and oz.

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

|  Name  |  Type  |     Description                                                                                  | Required? |
| ------ | ------ | ------------------------------------------------------------------------------------------------ | --------- |
| weight | Number | The weight to convert.                                                                           |    Yes    |
|  unit  | String | The unit of the weight being converted. Can only be one of the following: "LB", "OZ", "KG", "G". | Yes |

Request Body Example
