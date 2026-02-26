import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomcommitiesComponent } from '../bottomcommities/bottomcommities.component';
import { NgFor } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-bottomsheet',
  standalone: true,
  imports: [MatButtonModule,MatChipsModule,NgFor,MatBottomSheetModule ,  BottomcommitiesComponent],
  templateUrl: './bottomsheet.component.html',
  styleUrl: './bottomsheet.component.css'
})
export class BottomsheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
  
  openBottomSheet(data : any): void {
    this._bottomSheet.open(BottomcommitiesComponent ,{data});
  }
  
commities = [ 
  {
    visited:false , 
    name :"Honorary Chairs" ,members : [
      'Pr. El Hadj Ailam, Rector of Djelfa University, Algeria',
      'Pr. Ahmed Hafaifa, Dean of Science and Technology Faculty in Djelfa University, Algeria'
      ]} , 
      {
        visited:false , 
        name :"General Chair" ,members : [
          'Dr. Bachir Nail, LASER Member, Djelfa University, Algeria',
          ]} ,
  {name :"Scientific Committee Chairs" ,
  visited:false , 
  members : [
    "Pr. Mohamed Boudiaf, LASER Member, Djelfa University, Algeria",
  "Dr. Tahar Benmessaoud, LASER Member, Djelfa University,Algeria",
 " Dr. Amar Kouadri, LASER Member, Djelfa University, Algeria",
  "Dr. Kouider Laroussi,  LASER Member, Djelfa University, Algeria," ,
  "Dr. Djaidir Berrabeh, LASER Member, Djelfa University, Algeria" , 

]},
  {
    visited:false , 
    name :"Organizing Chairs" ,members : [
      "Dr. Douroum Embarek, LASER Member, Djelfa University, Algeria" , 
"Dr. Samir Kherfane, LASER Member, Djelfa University, Algeria",
"Dr. Kherfane Riad Lakhdar, LASER Member, Djelfa University, Algeria",
"Dr. Habib Saddam Hocine, LASER Member, Djelfa University, Algeria",
"Dr. Khoudiri Said, LASER Member, Djelfa University, Algeria",
'Dr. Tahiri Antar, LASER Member, Djelfa University, Algeria',
"Dr. Mohamed El Bar,  LASER Member, Djelfa University, Algeria",

  ]} ,  

{
  visited:false , 
  name :"Technical Program Committee" 
  ,members : [
    "Dr. Bakria Derradji, LASER Member, Djelfa University, Algeria" , 
    "Dr. Tahar Benaissa, LASER Member, Djelfa University, Algeria",
  ]}, 
    
     {
      visited:false , 
      name :"Website Chair" ,members : [
     " Mr. Ibrahim Hadji, Djelfa University, Algeria"
     ]} , 
     {
      visited:false , 
      name :"Scientific committee" ,members : [
      'Dr. Laaroussi Kouider, Djelfa UNIV, Algeria',
      "Pr. Boudiaf Mohamed, Djelfa UNIV, Algeria",
      'Pr Saadi Slami , Djelfa UNIV, Algeria' , 
      "Pr. Mazouz Lakhdar, Djelfa UNIV, Algeria",
      "Pr. Mitiche Lahcene, Djelfa UNIV, Algeria",
      'Dr. Nail Bachir, Djelfa UNIV, Algeria',
"Dr. Amari Abderrehmane, Djelfa UNIV, Algeria",
"Dr. Bakria Derradji, Djelfa UNIV, Algeria",
"Dr. Benaissa Tahar, Djelfa UNIV, Algeria",
"Dr. Benmessaoud Tahar, Djelfa UNIV, Algeria",
"Dr. Benrahmoune Mohamed, Tamanrasset UNIV,Algeria",
'Dr. Djaidir Berrabeh, Djelfa UNIV, Algeria',
'Dr. Dourroum Embarek, Djelfa UNIV, Algeria',
'Dr. Elbar Mohamed, Djelfa UNIV, Algeria',
'Dr. Habib Saddam Hocine, Djelfa UNIV, Algeria',
'Dr. Kherfane Riad Lakhdar, Djelfa UNIV, Algeria',
'Dr. Kherfane Samir, Djelfa UNIV, Algeria',
'Dr. Khoudiri Said, Djelfa UNIV, Algeria',
'Dr. Khoudiri Abdelkader, Djelfa UNIV, Algeria',
'Dr. Kouadri Amar, Djelfa UNIV, Algeria',
'Dr. Bagua Hakim, Djelfa UNIV, Algeria',
'Dr. Mosbah Laouamer, El oued UNIV, Algeria',
'Dr. Douara Abdelmalek, Tissemsilt UNIV, Algeria',
'Dr. Bendriss Abdelkader, Djelfa UNIV, Algeria',
'Dr. Zaitri Mokhtar, Djelfa UNIV, Algeria',
'Dr. Tahiri Antar, Djelfa UNIV, Algeria',
'Dr. Teta Ali, Djelfa UNIV, Algeria',
'Dr. Toual Belgacem, Djelfa UNIV, Algeria',
"Pr. Kamel Geusmi, Djelfa UNIV, Algeria",
'Dr. Toufik Naas Tayeb, Djelfa UNIV, Algeria',
     ]} ,   
]

} 

