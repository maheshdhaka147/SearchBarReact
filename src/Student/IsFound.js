export const IsNameFound=(firstName,lastName,searchPara)=>{
    const fullName=`${firstName} ${lastName}`
    return fullName.startsWith(searchPara)
}
export const IsTagFound=(tags,searchTag)=>{
    if(searchTag.length===0){
        return true
    }
    let tagStatus=true
    let count=0
    for(let element of tags){ // Check whether tags exist or not for a particular student
        if(element.startsWith(searchTag)){
            count++
            break
        }
    }
    tagStatus=count>0?true:false
    return tagStatus
}