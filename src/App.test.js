import { render, screen } from '@testing-library/react';
import {IsNameFound,IsTagFound} from "./Student/IsFound"
import {FormatString} from "./Student/FormatString"

// Dummy Data Object Of a Student
const Obj={"city":"Fush\u00eb-Muhurr","company":"Yadel","email":"iorton0@imdb.com",
"firstName":"Ingaberg","grades":["78","100","92","86","89","88","91","87"],"id":"1","lastName":"Orton",
"pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg",
"skill":"Oracle",tags:['Tag1','Tag3']}

test('Tag Found: tag1', () => {
  let seatchTag='tag1'
  seatchTag=FormatString(seatchTag)
  expect(IsTagFound(Obj.tags,seatchTag)).toBe(true)
});

test('Tag Found: Tag3', () => {
  let searchTag='Tag3'
  searchTag=FormatString(searchTag)
  expect(IsTagFound(Obj.tags,searchTag)).toBe(true)
});

test('Tag Not Found: tag2', () => {
  let searchTag='tag2'
  searchTag=FormatString(searchTag)
  expect(IsTagFound(Obj.tags,searchTag)).toBe(false)
});

test('Name Found: Inga', () => {
  let searchPara='Inga'
  searchPara=FormatString(searchPara)
  expect(IsNameFound(Obj.firstName,Obj.lastName,searchPara)).toBe(true)
});

test('Name Found: Ingaberg Orton', () => {
  let searchPara='Ingaberg Orton'
  searchPara=FormatString(searchPara)
  expect(IsNameFound(Obj.firstName,Obj.lastName,searchPara)).toBe(true)
});

test('Name Not Found: Mahesh', () => {
  let searchPara='Mahesh'
  searchPara=FormatString(searchPara)
  expect(IsNameFound(Obj.firstName,Obj.lastName,searchPara)).toBe(false)
});