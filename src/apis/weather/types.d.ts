import ApiMap from "./apiMap";


type ApiMapItem = typeof ApiMap[keyof typeof ApiMap];


type Params = {
  [key: string]: string | number | boolean
}