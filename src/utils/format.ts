/*
 * @Author: D.Y.M
 * @Date: 2022-02-09 10:48:35
 * @LastEditTime: 2022-03-21 16:12:16
 * @FilePath: /data/src/utils/format.ts
 * @Description: 
 */
import moment from 'moment'

export const getFirstCode = (name: string) => {
    if(!name) {
        return ''
    }
    return name.charAt(0)
}

export const getUnit = (num: number) => {
    if(num >= 1048576) {
        return (num/1048576).toFixed(2) + 'M'
    }
    if(num >= 1024) {
        return (num/1024).toFixed(2) + 'K'
    }
    return num + 'B'
    
}

export const dateFormat = (str: string)=>{
    if(!str){
        return ""
    }
    return moment(str).format("YYYY-MM-DD HH:mm:ss")
}
export const dateDayFormat = (str: string)=>{
    if(!str){
        return ""
    }
    return moment(str).startOf('day').format("YYYY-MM-DD")
}
