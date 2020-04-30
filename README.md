# inRiver JS 
A simple wrapper for the inRiver IPMC REST API.

## Installation

    // npm
    npm i inriverjs

    // yarn
    yarn add inriverjs


## Usage

1. Create the context with an initial setup of a key and Endpoint  👇

```javascript
import InRiverAPIClient from "inriverjs";

const inRiverApi = new InRiverAPIClient(
  "YOUR-API-KEY-HERE",
  "https://partnerapieuw.productmarketingcloud.com"
);
```

2. Use the API 👌

```javascript
inRiverApi.Model.getCVLValue("ActivityStatus")
.then((result) => {
    console.log(result.data);
});
```

## Examples

Display all Roles in the IPMC environment:
```javascript
inRiverApi.System.Roles()
    .then((result) => {
        result.data.forEach((role) => {
            console.log(role.name);
            console.log(role.description);
        });
    }).catch((error) => {
        console.error(error);
    });
```

Get entity summary:
```javascript
inRiverApi.Entities.GetEntitySummary(1)
    .then((result) => {
        console.log(result.data.createdBy);
        console.log(result.data.displayName);
    }).catch((error) => {
        console.error(error);
    });
```
## Buy Me A Coffee 
If you would like to  support me for more inRiver Open Source tools.

<a href="https://www.buymeacoffee.com/aplusk" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
