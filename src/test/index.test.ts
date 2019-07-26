import InRiverAPIClient from "../index";

const api = new InRiverAPIClient(
  "ab3027bb3170177af46f2d6f233ba6f8",
  "https://partnerapieuw.productmarketingcloud.com"
);

api.Model.getCVLValue("ActivityStatus").then((result) => console.log(result.data));
