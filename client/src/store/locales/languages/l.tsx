const en = require('./en.json');
const ua = require('./ua.json');
import { RootState } from "../../store";
import { useSelector } from "react-redux";
// const lang = useSelector(()=>{})
// const lang = useSelector((state: RootState) => state.language.lang)
// console.log(lang);


export const translation = (keyword:string) =>{
   let languageData : {[keyword:string]:string} = {}
   if('en' === 'en') languageData = en
   else if('ua' === 'ua')languageData = ua
   return languageData[keyword]
}