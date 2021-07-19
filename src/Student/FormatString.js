export const FormatString=(value)=>{
    const splittedArr=value.split(" ")
    const searchArr=[]
    for(let element of splittedArr){
        // To Ensure First Character of every word is UpperCase and other chars are LowerCase
        searchArr.push(`${element.charAt(0).toUpperCase()}${element.slice(1)}`)
    }
    const searchString=searchArr.join(' ')
    return searchString
}